export const getObjFromArrayByKey = (ary, sKey, value) => {
    for (let i = 0, iL = ary.length; i < iL; i++) {
        if (ary[i][sKey] === value)
            return ary[i];
    }
    return null;
}

export const getChildElementIndex = (elem) => {
    var i = 0;
    while ((elem = elem.previousSibling) != null) ++i;
    return i;
}

export const getBoostrapTableColumnsByData = (aData) => {
    let oFirstRow = aData[0];
    let aColumns = [];

    for (var sKey in oFirstRow) {
        if (sKey === "_id") continue;
        aColumns.push({
            dataField: sKey,
            text: sKey
        });
    }

    return aColumns;
}