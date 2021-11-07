import {
    Box, Tabs, Tab, TextField, Button,
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from "@material-ui/core";
import React from 'react';
import TabPanel from "./TabPanel";
import { useTranslation } from 'react-i18next';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { validIsEmpty, validResopnseErrorMsg } from "../../api/Validator";
import { DropzoneArea } from 'material-ui-dropzone';
import { apiConvertFileToJson } from '../../api/API'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { getBoostrapTableColumnsByData, getChildElementIndex } from "../../api/Getter";
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import cellEditFactory from 'react-bootstrap-table2-editor';
import { convertToBootstrapData } from "../../api/Converter";

const theme = createTheme({
    overrides: {
        MuiTabs: {
            scrollButtonsDesktop: {
                backgroundColor: 'rgb(0 0 0 / 13%)'
            }
        },
        MuiTypography: {
            body1: {
                fontSize: "13px",
                lineHeight: "20px"
            }
        },
        MuiTab: {
            wrapper: {
                textTransform: "none"
            }
        },
        MuiOutlinedInput: {
            inputMarginDense: {
                padding: "6px 10.5px !important"
            }
        }
    }
});

const DataSource = () => {

    const { t } = useTranslation();
    const eTabs = React.useRef(null);

    const [paramSelectedIndex, setSelectedIndex] = React.useState(0);
    const [paramEditingCaption, setEditingCaption] = React.useState("");
    const [paramShowDialog, setShowDialog] = React.useState(false);
    const [paramDataSourceList, setDataSourceList] = React.useState((document.sms && document.sms.dataSourceList) ?? [
        {
            id: 123,
            caption: 'newTable',
            isEdit: false,
            content: null,
            showRemoveIcon: false
        },
        {
            id: 124,
            caption: 'test2',
            isEdit: false,
            content: null,
            showRemoveIcon: false
        }
    ]);

    React.useEffect(() => {
        if (!document.sms) {
            document.sms = {};
        }

        document.sms.dataSourceList = paramDataSourceList;
    });

    const handleChange = (event, newValue) => {
        setSelectedIndex(newValue);
        console.log(newValue)
    };

    const updateTabNameFunc = (e) => {
        let sNowId = e.target.id;
        if (validIsEmpty(sNowId)) sNowId = e.target.parentElement.id
        if (validIsEmpty(sNowId)) return;

        let aNewList = paramDataSourceList.slice();
        for (let i = 0, iL = aNewList.length; i < iL; i++) {
            if (aNewList[i].id === parseInt(sNowId)) {
                aNewList[i].isEdit = true;
                setEditingCaption(aNewList[i].caption);
                break;
            }
        }
        setDataSourceList(aNewList);
    }

    const editTabCaptionFunc = (e) => {
        setEditingCaption(e.target.value);
    }

    const saveCaptionFunc = (e) => {
        if (e.charCode !== 13 && e.type !== "blur") return;
        let sNewCaption = e.target.value;
        let sNowId = e.target.id;

        let aNewList = paramDataSourceList.slice();
        for (let i = 0, iL = aNewList.length; i < iL; i++) {
            if (aNewList[i].id === parseInt(sNowId)) {
                aNewList[i].isEdit = false;
                aNewList[i].caption = sNewCaption;
                break;
            }
        }
        setDataSourceList(aNewList);
    }

    const addNewDataSourceFunc = (e) => {

        let aNewList = paramDataSourceList.slice();
        let iMaxId = Math.max.apply(null, aNewList.map(o => o.id));
        aNewList.push({
            id: ++iMaxId,
            caption: t('newTable') + (aNewList.length + 1),
            isEdit: false
        });
        setDataSourceList(aNewList);
    }

    const uploadFileFunc = (aFiles) => {

        if (validIsEmpty(aFiles)) return;
        let oFile = aFiles[0];
        let oFReader = new FileReader();
        oFReader.addEventListener("load", function () {
            callConverFileToJsonApi(oFReader.result);
        }, false);
        oFReader.readAsDataURL(oFile);
    }

    const callConverFileToJsonApi = (sBinaryString) => {
        apiConvertFileToJson(sBinaryString).then(oRes => {
            let errorMsg = validResopnseErrorMsg(oRes.data);
            if (!validIsEmpty(errorMsg)) {
                console.log("error:", errorMsg);
                return alert(errorMsg);
            }
            let aData = oRes.data.content;
            let aNewDataSourceList = paramDataSourceList.slice();

            aNewDataSourceList[paramSelectedIndex].content = aData;

            setDataSourceList(aNewDataSourceList);

        }).catch(e => {
            console.log("error:", e);
        });
    }

    const dynamicDeleteIconFunc = (e) => {

        let bShowRemoveIcon = true;
        if (e.type === "mouseleave")
            bShowRemoveIcon = false;

        let eHoverEle = e.target;

        if (eHoverEle.className && !eHoverEle.className.indexOf) return;

        if (eHoverEle.className && eHoverEle.className.indexOf && eHoverEle.className.indexOf("sms-datasource-tab") === -1) {
            eHoverEle = e.target.parentElement;
        }

        let iHoverIndex = getChildElementIndex(eHoverEle)

        if (iHoverIndex !== paramSelectedIndex) bShowRemoveIcon = false;

        let aNewDataSourceList = paramDataSourceList.slice();

        aNewDataSourceList[paramSelectedIndex].showRemoveIcon = bShowRemoveIcon;

        setDataSourceList(aNewDataSourceList);

    }

    const showConfirmDialogFunc = (e) => {
        setShowDialog(true);
    }

    const closeConfirmDialogFunc = (e) => {
        setShowDialog(false);
    };

    const deleteDataTableFunc = (e) => {

        let aNewDataSourceList = paramDataSourceList.slice();

        aNewDataSourceList.splice(paramSelectedIndex, 1);

        setSelectedIndex(aNewDataSourceList.length - 1);
        
        setDataSourceList(aNewDataSourceList);

        closeConfirmDialogFunc();
    };



    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ bgcolor: 'background.paper' }}>
                <Tabs
                    style={{ width: "80%" }}
                    value={paramSelectedIndex}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    ref={eTabs}
                >
                    {paramDataSourceList.map((obj, i) => {
                        if (obj.isEdit)
                            return (
                                <Tab key={i} id={obj.id} icon={<TextField
                                    hiddenLabel
                                    autoFocus
                                    style={{ width: 130 }}
                                    id={obj.id.toString()}
                                    variant="outlined"
                                    size="small"
                                    value={paramEditingCaption}
                                    onBlur={saveCaptionFunc}
                                    onKeyPress={saveCaptionFunc}
                                    onChange={editTabCaptionFunc}
                                />}
                                />)
                        else
                            return (<Tab
                                className="sms-datasource-tab"
                                key={i}
                                id={obj.id}
                                iconposition='end'
                                onDoubleClick={updateTabNameFunc}
                                onMouseMove={dynamicDeleteIconFunc}
                                onMouseLeave={dynamicDeleteIconFunc}
                                label={<>{obj.caption}{obj.showRemoveIcon ? <HighlightOffIcon style={{ position: "absolute", right: 0 }} onClick={showConfirmDialogFunc} /> : null}</>}
                            />)
                    })}

                    <Tab label={"✚"} style={{ minWidth: "48px", background: "#c3bfbf" }} onClick={addNewDataSourceFunc} />

                </Tabs>

                {paramDataSourceList.map((obj, i) => {
                    if (validIsEmpty(obj.content))
                        return (
                            <TabPanel style={{ width: "100%" }} key={i} value={paramSelectedIndex} index={i}>
                                <DropzoneArea
                                    style={{ heigth: "500px", width: "600px" }}
                                    acceptedFiles={['.csv', '.xlsx']}
                                    filesLimit={1}
                                    maxFileSize={1024 * 1024 * 5}
                                    dropzoneText={t('uploadDataSource')}
                                    onChange={uploadFileFunc}
                                />
                            </TabPanel>
                        )
                    else
                        return (
                            <TabPanel style={{ width: "100%" }} key={i} value={paramSelectedIndex} index={i}>
                                <BootstrapTable
                                    style={{ minWidth: "100%" }}
                                    keyField='_id'
                                    hover
                                    data={convertToBootstrapData(obj.content)}
                                    columns={getBoostrapTableColumnsByData(obj.content)}
                                    cellEdit={cellEditFactory({ mode: 'dbclick', blurToSave: true })}
                                />
                            </TabPanel>
                        )
                })}

            </Box>

            <Dialog open={paramShowDialog} onClose={closeConfirmDialogFunc}>
                <DialogTitle id="delete-dialog-title">
                    {t('confirmDeleteTable')}
                </DialogTitle>
                <DialogContent style={{ width: "450px" }}>
                    <DialogContentText id="delete-dialog-description">
                        {t('dataTable')}:「{paramDataSourceList[paramSelectedIndex].caption}」
                        {t('confirmDeleteDetail')}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeConfirmDialogFunc} variant="contained" color="primary" autoFocus>{t('Disagree')}</Button>
                    <Button onClick={deleteDataTableFunc} disabled={paramDataSourceList.length === 1}>{t('Agree')}</Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider >
    );
}

export default DataSource;