/**
 * WordPress dependencies
 */

import {
	__,
	_n,
	sprintf
} from '@wordpress/i18n';

import { Tooltip } from '@wordpress/components';

/**
 * Components
 */

export const ColsRowHelperInner = (props) => {
	const {
		index
	} = props;
	return <span>{index}</span>
};

export const GridHelperLabel = (props) => {
	const {
		lableType,
		lableCount
	} = props;
	return <div className={`grid-cols-rows-helper-wrap`}>
		<div className={`grid-${lableType.substring(0, 3).toLowerCase()}s-helper`} />
		{Array.from(Array(lableCount)).map((_, lableIndex) => (
			<div
				key={`${lableType}-lable-cell-${lableIndex}`}
				className="grid-cols-rows-helper"
				style={{
					[`grid${lableType}Start`]: ++lableIndex + 1,
					[`grid${lableType === 'Column' ? 'Row' : 'Column'}Start`]: 1,
				}}
			>
				<Tooltip text={sprintf(__('%2$s %1$d', 'h2ml'), lableIndex, lableType)}>
					<div>
						<span>{lableIndex}</span>
					</div>
				</Tooltip>
			</div>
		))}
	</div>
}

export const GridHelperCell = (props) => {
	const {
		cellLabel,
		cellX,
		cellY,
		onMouseDown,
		onMouseEnter
	} = props;
	return <div
		className="grid-area-helper"
		{...{ onMouseDown, onMouseEnter }}
		data-xcoords={cellX}
		data-ycoords={cellY}
		style={{
			gridArea: `${cellY + 1} / ${cellX + 1} / ${cellY + 2} / ${cellX + 2}`
		}}
	>
		{`${cellLabel}`} <sub>{`(${cellX}, ${cellY})`}</sub>
	</div>
}

export const GridHelperAppender = (props) => {
	const {
		style,
		children
	} = props;
	return (
		<div
			className="grid-grid-area-appender"
			area={props.area ? props.area : null}
			{...{ style }}
		>
			{children}
		</div>
	);
};