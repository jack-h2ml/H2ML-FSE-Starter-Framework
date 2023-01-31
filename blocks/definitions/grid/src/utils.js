//
//
//

export function cssSafeBase64(string) {
	return window.btoa(string).replace(/\W/g, '');
}

//
//
//

export function generateGridArea(x, y) {
	return cssSafeBase64(`${y}/${x}`);
}

//
//
//

export function generateGridAreaStartEnd(startX, startY, endX, endY) {
	//
	const start = cssSafeBase64(`${startY}/${startX}`);
	const end = cssSafeBase64(`${endY}/${endX}`);
	return `${start} / ${start} / ${end} / ${end}`;
}

//
// Generate the grid-template-areas, grid-template-columns, and grid-template-rows CSS.
//

export function generateGridTemplateAreas(colCount, rowCount) {
	return Array.from(Array(rowCount)).reduce((rowsRes, _, rowsI) => (
		`${rowsRes}'${Array.from(Array(colCount)).reduce((colsRes, _, colsI) => {
			return `${colsRes} ${generateGridArea(++colsI, rowsI + 1)}`.trim();
		}, '')}'`
	), '');
}

//
//
//

export function generateGridTemplateColumnsOrRows(templates) {
	return templates.reduce((res, cur) => {
		return `${res} ${cur}`;
	}, '');
}
