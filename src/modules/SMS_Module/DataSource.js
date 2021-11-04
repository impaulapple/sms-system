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
        }
    }
});

const DataSource = () => {

    const { t } = useTranslation();

    const [paramValue, setValue] = React.useState(0);

    const [paramDataSourceList, setDataSourceList] = React.useState([
        {
            id: 123453,
            caption: t('newTable'),
            isEdit: false
        },
        {
            id: 123453564678,
            caption: t('test2'),
            isEdit: false
        }
    ]);


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const updateTabNameFunc = (e) => {
        let id = e.target.id;
        if (validIsEmpty(id))
            id = e.target.parentElement.id


        let data = e.target.parentElement.data;
        console.log(e, id, data)
    }

    const addNewDataSourceFunc = (e) => {

        let aNewList = paramDataSourceList.slice();

        aNewList.push({
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
                        return (<Tab key={i} id={obj.id} label={obj.caption} onDoubleClick={updateTabNameFunc} />)
                    })}

                    {/* <TextField
                        label="Size"
                        id="outlined-size-small"
                        defaultValue="Small"
                        variant="outlined"
                        size="small"
                    /> */}

                    <Tab label={"✚"} style={{ minWidth: "48px", background: "#c3bfbf" }} onClick={addNewDataSourceFunc} />

                </Tabs>

                {paramDataSourceList.map((obj, i) => {
                    return (
                        <TabPanel style={{ width: "100%" }} key={i} value={paramValue} index={i}>
                            {obj.caption}
                        </TabPanel>
                    )
                })}

            </Box>
        </ThemeProvider >
    );
}

export default DataSource;