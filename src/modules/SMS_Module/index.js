import { Tabs, Tab, } from "@material-ui/core";
import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import './index.css';
import TabPanel from "./TabPanel";
import DataSource from "./DataSource";
import { useTranslation } from 'react-i18next';
import EjectIcon from '@material-ui/icons/Eject';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TextTemplate from "./TextTemplate";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100%',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
    test: {
        width: '50px !important'
    }
}));



const SMSPage = () => {
    const { t } = useTranslation();
    const classes = useStyles();

    const aTabList = [
        {
            caption: t('setting'),
            component: <h1>yoyoyoyoyo King! 這是第一頁</h1>
        },
        {
            caption: t('dataSrouce'),
            component: <DataSource />
        },
        {
            caption: t('smsTool'),
            component: <TextTemplate />
        },
        {
            caption: t('smsScheduler'),
            component: <MenuBookIcon />
        },
    ];

    const [paramValue, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const a11yProps = (index) => {
        return {
            id: `vertical-tab-${index}`,
            'aria-controls': `vertical-tabpanel-${index}`,
        };
    }

    return (
        <div className={classes.root}>
            <Tabs
                className="sms-index-tabs"
                orientation="vertical"
                variant="scrollable"
                value={paramValue}
                onChange={handleChange}
                componentsprops={{ indicator: { className: 'Indicator' } }}
            >
                {aTabList.map((obj, i) => {
                    return (<Tab key={i} label={obj.caption} {...a11yProps(i)} />)
                })}

            </Tabs>


            {aTabList.map((obj, i) => {
                return (
                    <TabPanel style={{ width: "100%",overflow:"auto" }} key={i} value={paramValue} index={i}>
                        {obj.component}
                    </TabPanel>
                )
            })}
        </div>
    );
}

export default SMSPage;