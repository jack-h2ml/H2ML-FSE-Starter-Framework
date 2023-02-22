/**
 * WordPress dependencies
 */

import {
	__,
	_n,
} from '@wordpress/i18n';

import { useState } from '@wordpress/element';

import { Button } from '@wordpress/components';

import { useRefEffect } from '@wordpress/compose';

/**
 * Internal dependencies
 */

import { generateGridAreaStartEnd } from '../../utils.js'

/**
* Event callback Function for starting / updating the selecting of a Grid-Area Area
*/

const doGridHelperSelection = (e, coords, res) => {
	// Reset the grid area coords on mousedown.
	if (e.type === 'mousedown') res = null;
	// Determine if we're updating an existing selection (dragging), or starting a new one (clicking).
	const startX = res?.store?.x ? res?.store?.x : Number(coords.cellX);
	const startY = res?.store?.y ? res?.store?.y : Number(coords.cellY);
	const endX = Number(coords.cellX);
	const endY = Number(coords.cellY);
	// Calculate and store the new Coords values.
	res = {
		store: {
			x: startX,
			y: startY,
		},
		start: {
			x: Math.min(startX, endX),
			y: Math.min(startY, endY)
		},
		end: {
			x: Math.max(startX, endX),
			y: Math.max(startY, endY),
		}
	};
	res.parsed = generateGridAreaStartEnd(res.start.x, res.start.y, res.end.x, res.end.y);
	return res;
}

/** 
 * Local Componentns
 */

const GridHelperCell = (props) => {
	const {
		cellLabel,
		cellX,
		cellY,
		onMouseDown,
		onMouseEnter,
	} = props;
	return <div
		className="grid-area-helper"
		{...{ onMouseDown, onMouseEnter }}
		data-xcoords={cellX}
		data-ycoords={cellY}
		style={{
			gridArea: generateGridAreaStartEnd(cellX , cellY, cellX, cellY)
		}}
	>
		<span>
			{`${cellLabel}`} <sub>{`(${cellX}, ${cellY})`}</sub>
		</span>
	</div>
}

const GridHelperAppender = (props) => {
	const {
		style,
		children,
		area
	} = props;
	return (
		<div
			className="grid-grid-area-appender"
			area={area ? area : null}
			{...{ style }}
		>
			{children}
		</div>
	);
};

/**
 * The JSX
 */

export const GridEditor = (props) => {
	// Properties.
	const {
		colCount,
		rowCount,
		target,
		saveFunction
	} = props;
	// State Managers.
	const [gridHelperIsDrawing, setGridHelperIsDrawing] = useState(false);
	const [gridHelperCanSave, setGridHelperCanSave] = useState(false);
	const [gridHelperCoordRes, setGridHelperCoordRes] = useState(null);
	//
	// Determine if adding a new grid area, if adding the 'editing' prop will be a <Bool> which is 'True', 
	// if editing the 'editing' prop will be a <String> containing the Grid-Area 'clientId',
	//
	const isEditing = (target !== undefined && target !== false);
	const isAdding = (target === !!target);
	//
	// Handle Finish Editing.
	//
	const ref = useRefEffect((element) => {
		const { ownerDocument } = element;
		const finishSelectingGridArea = () => {
			// Reset State.
			setGridHelperIsDrawing(false);
			// Set State.
			setGridHelperCanSave(true);
		}
		if(gridHelperIsDrawing) {
			ownerDocument.addEventListener('mouseup', finishSelectingGridArea);
		}
		return () => {
			// Cleanup this Document event listener.
			ownerDocument.removeEventListener('mouseup', finishSelectingGridArea);
		};
	}, [gridHelperIsDrawing]);
	//
	// The JSX.
	//
	return <div 
		className="grid-helpers"
		ref={ref}
	>
		{Array.from(Array(colCount * rowCount)).map((_, cellIndex) => {
			cellIndex++;
			const cellX = ((cellIndex - 1) % colCount) + 1;
			const cellY = Math.floor((cellIndex - 1) / colCount) + 1;
			return <GridHelperCell
				{...{
					key: `helper-cell-${cellIndex}`,
					cellLabel: cellIndex,
					cellX,
					cellY,
					onMouseDown: (isEditing ? (e) => {
						// Reset State.
						setGridHelperCanSave(false);
						// Set State.
						setGridHelperIsDrawing(true);
						setGridHelperCoordRes(doGridHelperSelection(e, { cellX, cellY }, gridHelperCoordRes));
					} : undefined),
					onMouseEnter: (gridHelperIsDrawing ? (e) => {
						// Update Grid Area Selection.
						setGridHelperCoordRes(doGridHelperSelection(e, { cellX, cellY }, gridHelperCoordRes));
					} : undefined)
				}}
			/>
		})}
		{isEditing && (
			<>
				{isAdding ? (
					<div 
						className="grid-adding-grid-areas-notice"
						style={{
							display: 'flex'
						}}
					>
						<p><strong>{__("Click and drag", 'h2ml')}</strong> {__("to add a new Grid Area, when you're done click", 'h2ml')} <strong>{__("Save Grid Area", 'h2ml')}</strong>.<br />{__("Don't forget to ")}<strong>{__("Update", 'h2ml')}</strong>{__(" the post when you're done.", 'h2ml')}</p>
					</div>
				) : (
					<div 
						className="grid-adding-grid-areas-notice"
						style={{
							display: 'flex'
						}}
					>
						<p><strong>{__("Click and drag", 'h2ml')}</strong> {__("to edit the Grid Area, when you're done click", 'h2ml')} <strong>{__("Save Grid Area", 'h2ml')}</strong>.<br />{__("Don't forget to ")}<strong>{__("Update", 'h2ml')}</strong>{__(" the post when you're done.", 'h2ml')}</p>
					</div>
				)}
				<GridHelperAppender
					className="grid-grid-area-appender"
					style={gridHelperCoordRes ? {
						gridArea: gridHelperCoordRes.parsed,
						display: 'flex'
					} : undefined}
				> 
				{gridHelperCanSave && (
					<Button
						text={isAdding ? 
							__('Add Grid Area', 'h2ml') :
							__('Update Grid Area', 'h2ml')
						}
						label={isAdding ? 
							__('Add Grid Area', 'h2ml') :
							__('Update Grid Area', 'h2ml')
						}
						style={{
							pointerEvents: 'all'
						}}
						showTooltip={false}
						variant="primary"
						onClick={() => { 
							// Save the new / updated Grid Area.
							saveFunction(gridHelperCoordRes, target); 
							// Reset state.
							setGridHelperIsDrawing(false);
							setGridHelperIsDrawing(false);
							setGridHelperCoordRes(null);
							// We use useEffect in the main component to reset the Grids 'editing' attriubte, so we don't
							// need to worry about doing it here, this allows us to more easily focus on the correct blocks.
						}}
					></Button>
				)} </GridHelperAppender>
			</>
		)}
	</div>
}