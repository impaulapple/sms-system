import { Box, Tabs, Tab, TextField } from "@material-ui/core";
import React from 'react';
import TabPanel from "./TabPanel";
import { useTranslation } from 'react-i18next';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { validIsEmpty } from "../../api/Validator";

const theme = createTheme({
    overrides: {
        MuiTabs: {
            scrollButtonsDesktop: {
                backgroundColor: 'rgb(0 0 0 / 13%)'
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

    const [paramValue, setValue] = React.useState(0);
    const [paramEditingCaption, setEditingCaption] = React.useState("");

    const [paramDataSourceList, setDataSourceList] = React.useState([
        {
            id: 123,
            caption: 'newTable',
            isEdit: false,
            content: null
        },
        {
            id: 124,
            caption: 'test2',
            isEdit: false,
            content: null
        }
    ]);


    const handleChange = (event, newValue) => {
        setValue(newValue);
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
    const handleInputChange = (event) => {
        event.stopPropagation();
    }

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "80%", bgcolor: 'background.paper' }}>
                <Tabs
                    value={paramValue}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
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
                            return (<Tab key={i} id={obj.id} label={obj.caption} onDoubleClick={updateTabNameFunc} />)
                    })}

                    <Tab label={"✚"} style={{ minWidth: "48px", background: "#c3bfbf" }} onClick={addNewDataSourceFunc} />

                </Tabs>

                {paramDataSourceList.map((obj, i) => {
                    return (
                        <TabPanel style={{ width: "100%" }} key={i} value={paramValue} index={i}>
                            {obj.content}
                        </TabPanel>
                    )
                })}

            </Box>
        </ThemeProvider >
    );
}

export default DataSource;