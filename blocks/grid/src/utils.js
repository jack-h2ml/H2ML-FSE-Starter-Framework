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

export function generateGridTemplateAreas(context, colCount, rowCount) {
    if(context) {
        // Save
        return Array.from(Array(rowCount)).reduce((rowsRes, _, rowsI) => (
            `${rowsRes}\n"${Array.from(Array(colCount)).reduce((colsRes, _, colsI) => {
                return `${colsRes} ${generateGridArea(++colsI, rowsI + 1)}`;
            }, '')}"`
        ), '');
    } else {
        // Editor
        // In the editor only, we add an additional Column / Row to the Grid Temlplate Areas, 
        // to account for the grid helpers.
        return Array.from(Array(rowCount)).reduce((rowsRes, _, rowsI) => (
            `${rowsRes}\n"${Array.from(Array(colCount)).reduce((colsRes, _, colsI) => {
                return `${colsRes} ${generateGridArea(++colsI, rowsI + 1)}`;
            }, '.')}"`
        ), `"${Array.from(Array(colCount)).reduce((editorRes, _, i) => `${editorRes} .`, '.')}"`);
    }
}

//
//
//

export function generateGridTemplateColumnsOrRows(context, templates) {
    if(context) {
        // Save
        return templates.reduce((res, cur) => {
            return `${res} ${cur}`;
        }, '');
    } else {
        // Editor
        // In the editor only, we add an additional Column / Row template to account for the grid helpers.
        return templates.reduce((res, cur) => {
            return `${res} ${cur}`;
        }, 'min-content');
    }
}
