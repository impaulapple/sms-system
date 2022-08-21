import { Tabs, Tab, } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './index.css';
import TabPanel from "./TabPanel";
import DataSourcePage from "./DataSourcePage";
import { useTranslation } from 'react-i18next';
import EjectIcon from '@material-ui/icons/Eject';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TextTemplatePage from "./TextTemplatePage";
import SettingPage from "./SettingPage";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100%',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    }
}));



const SMSPage = () => {
    const { t } = useTranslation();
    const classes = useStyles();

    const aTabList = [
        {
            caption: t('setting'),
            component: <SettingPage />
        },
        {
            caption: t('dataSrouce'),
            component: <DataSourcePage />
        },
        {
            caption: t('smsTool'),
            component: <TextTemplatePage />
        },
        {
            caption: t('smsScheduler'),
            component: <MenuBookIcon />
        },
    ];

    const [paramValue, setValue] = React.useState(0);

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
                    <TabPanel className="sms-index-tab-panel" key={i} value={paramValue} index={i}>
                        {obj.component}
                    </TabPanel>
                )
            })}
        </div>
    );
}

export default SMSPage;