export const validIsESN = sESN => {
    return sESN.length === 10;
}

export const validIsEmpty = v => {
    if (v && typeof v === 'object')
        return Object.entries(v).length === 0;
    return v === "" || v === null || v === undefined;
}

export const validLogin = (sAccount, sPassword) => {
    // call api here

    let C_ZSVVPIMT = "21232f297a57a5a743894a0e4a801fc3";
    let C_P0DDRYH = "81dc9bdb52d04dc20036dbd8313ed055";

    if (C_ZSVVPIMT !== sAccount) {
        return "accountError";
    }

    if (C_P0DDRYH !== sPassword) {
        return "pwdError";
    }

    return "";
}