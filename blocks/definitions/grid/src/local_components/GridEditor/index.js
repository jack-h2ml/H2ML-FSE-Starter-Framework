/**
 * WordPress dependencies
 */

import {
	__,
	_n,
} from '@wordpress/i18n';

import {
	select,
	dispatch
} from '@wordpress/data';

import {
	store as blockEditorStore,
} from '@wordpress/block-editor';

import { createBlock } from '@wordpress/blocks';

import { useState } from '@wordpress/element';

import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */

import {
	GridHelperLabel,
	GridHelperCell,
	GridHelperAppender
} from './components'

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
 * Save Function
 */

const doGridHelperSave = (gridClientId, target, coords) => {
	if (target.clientId) {
		// Hooks.
		const {updateBlockAttributes} = dispatch(blockEditorStore);
		// Update the requested Grid Area.
		updateBlockAttributes(target.clientId, {
			gridArea: coords,
			requestEdit: false
		});
	} else {
		// Hooks.
		const { getBlocks } = select(blockEditorStore);
		const { insertBlock } = dispatch(blockEditorStore);
		// Adding a new Grid Area.
		const {
			nextChildStackingOrder,
			nextChildIndex
		} = getBlocks(gridClientId).reduce(
			(res, cur, ind) => {
				res.nextChildStackingOrder = cur.attributes.stackingOrder >= res.nextChildStackingOrder ? cur.attributes.stackingOrder + 1 : res.nextChildStackingOrder;
				res.nextChildIndex = ind + 1;
				return res;
			}, {
			nextChildStackingOrder: 0,
			nextChildIndex: 0
		}
		);
		// Insert the new Grid Area.
		insertBlock(createBlock('h2ml/grid-area', {
			gridArea: coords,
			stackingOrder: nextChildStackingOrder
		}), nextChildIndex, gridClientId);
	}
}

/**
 * The JSX
 */

export const GridEditor = (props) => {
	// Properties.
	const {
		gridClientId,
		colCount,
		rowCount,
		editing
	} = props;
	// State Managers.
	const [gridHelperIsDrawing, setGridHelperIsDrawing] = useState(false);
	const [gridHelperCanSave, setGridHelperCanSave] = useState(false);
	const [gridHelperCoordRes, setGridHelperCoordRes] = useState(null);
	// The JSX.
	return <div class="grid-helpers">
		<GridHelperLabel
			lableType="Column"
			lableCount={colCount}
		/>
		<GridHelperLabel
			lableType="Row"
			lableCount={rowCount}
		/>
		{Array.from(Array(colCount * rowCount)).map((_, cellIndex) => {
			cellIndex++;
			const cellX = ((cellIndex - 1) % colCount) + 1;
			const cellY = Math.floor((cellIndex - 1) / colCount) + 1;
			return <GridHelperCell
				{...{
					cellLabel: cellIndex,
					cellX,
					cellY,
					onMouseDown: (editing ? (e) => {
						// End Grid Area Selection.
						const finishSelectingGridArea = () => {
							// Reset State.
							setGridHelperIsDrawing(false);
							// Set State.
							setGridHelperCanSave(true);
							// Cleanup this Document event listener.
							document.removeEventListener('mouseup', finishSelectingGridArea);
						}
						document.addEventListener('mouseup', finishSelectingGridArea);
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
		{editing && (
			<>
				{editing?.clientId ? (
					<div class="grid-adding-grid-areas-notice">
						<p><strong>{__("Click and drag", 'h2ml')}</strong> {__("to edit the Grid Area, when you're done click", 'h2ml')} <strong>{__("Save Grid Area", 'h2ml')}</strong>, {__("press", 'h2ml')} <strong>{__("E", 'h2ml')}</strong> {__("or", 'h2ml')} <strong>{__("C", 'h2ml')}</strong> {__("to cancel.", 'h2ml')}<br />{__("Don't forget to ")}<strong>{__("Update", 'h2ml')}</strong>{__(" the post when you're done.", 'h2ml')}</p>
					</div>
				) : (
					<div class="grid-adding-grid-areas-notice">
						<p><strong>{__("Click and drag", 'h2ml')}</strong> {__("to add a new Grid Area, when you're done click", 'h2ml')} <strong>{__("Save Grid Area", 'h2ml')}</strong>, {__("press", 'h2ml')} <strong>{__("E", 'h2ml')}</strong> {__("or", 'h2ml')} <strong>{__("C", 'h2ml')}</strong> {__("to cancel.", 'h2ml')}<br />{__("Don't forget to ")}<strong>{__("Update", 'h2ml')}</strong>{__(" the post when you're done.", 'h2ml')}</p>
					</div>
				)}
				<GridHelperAppender
					class="grid-grid-area-appender"
					style={gridHelperCoordRes ? {
						gridArea: gridHelperCoordRes.parsed,
						display: 'flex'
					} : undefined}
				> {gridHelperCanSave && (
					<Button
						text={editing?.clientId ? 
							__('Update Grid Area', 'h2ml') :
							__('Add Grid Area', 'h2ml')
						}
						label={editing?.clientId ? 
							__('Update Grid Area', 'h2ml') :
							__('Add Grid Area', 'h2ml')
						}
						showTooltip={true}
						variant="primary"
						onClick={() => { 
							// Save the new / updated Grid Area.
							doGridHelperSave(gridClientId, editing, gridHelperCoordRes); 
							// Reset state.
							setGridHelperIsDrawing(false);
							setGridHelperCanSave(false);
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