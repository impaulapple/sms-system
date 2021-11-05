export const getObjFromArrayByKey = (ary, sKey, value) => {
    for (let i = 0, iL = ary.length; i < iL; i++) {
        if (ary[i][sKey] === value)
            return ary[i];
    }
    return null;
}