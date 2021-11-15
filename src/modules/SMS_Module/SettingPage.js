import React from 'react';
import {
    Paper, Grid, Divider,
    Container, List, ListItem, ListItemIcon,
    ListItemText
} from "@material-ui/core";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%"
    },
    divider: {
        height: "initial",
        background: "#a3a4a5",
    }
}));

const SettingPage = () => {
    const classes = useStyles();

    React.useEffect(() => {
        if (!document.sms) {
            document.sms = {};
        }

        if (!document.sms.setting) {
            document.sms.setting = {}
        }

    }, []);

    return (

        <Container className={classes.root}>
            <Grid container alignItems="center" >

                {/* 左邊 */}
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem button>
                        <ListItemIcon>
                            <MenuBookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <MenuBookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Drafts" />
                    </ListItem>
                    <Divider />
                </List>

                {/* 中間分隔線 */}
                <Divider style={{
                    height: "initial",
                    background: "#a3a4a5",
                    width: "7px",
                    margin: "0 7px"
                }} orientation="vertical" flexItem />

                {/* 右邊 */}


            </Grid>



        </Container>
    )
}

export default SettingPage;