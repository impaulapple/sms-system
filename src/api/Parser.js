export const parseValueFromXml = (sXml, sNoteName) => {
    let regex = new RegExp(`<${sNoteName}>(.*?)</${sNoteName}>`)
    return regex.exec(sXml)[1];
}