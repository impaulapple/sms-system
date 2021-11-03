import { validIsEmpty } from "./Validator";

export const convertToLocalTime = (sDateTime) => {
    if (validIsEmpty(sDateTime)) return sDateTime;
    sDateTime = sDateTime.replace(/T/g, ' ').replace(/-/gm, '/');
    if (sDateTime.indexOf('.') > -1) {
        sDateTime = sDateTime.substring(0, sDateTime.indexOf('.'));
    }
    let dLocalDate = new Date(sDateTime + " UTC");
    return dLocalDate.toLocaleDateString() + " " + dLocalDate.toLocaleTimeString();
}

export const convertGetUTC = () => {
    var iGMT = new Date().getTimezoneOffset() / -60;
    let sGMT = iGMT >= 0 ? `UTC+${iGMT}` : `UTC${iGMT}`;
    return sGMT;
}

export const convertToLocalTimeWithUTC = (sDateTime) => {
    return `${convertToLocalTime(sDateTime)} (${convertGetUTC()})`;
}