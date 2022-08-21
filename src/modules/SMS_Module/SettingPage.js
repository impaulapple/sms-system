import React from 'react';
import {
    Grid, Container, Card, CardActionArea,
    CardContent, CardMedia, CardActions, Button, Typography,
    TextField
} from "@material-ui/core";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        border: '5px solid #f50057'
    },
    media: {
        height: 120,
        position: 'relative',
    },
    image: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: 'auto'
    },
    input: {
        margin: "5px 0"
    }
});
const aSmsList = [

];

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

        <Container>
            <Grid container alignItems="center" >

                <Grid item>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia className={classes.media}>
                                <img className={classes.image} title="mitake" src="https://www.mitake.com.tw/image/logo_20181205.png" width="100%" />
                            </CardMedia>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                       
                            </Typography>
                            <TextField className={classes.input} id="txt-mitake-hostname" focused autoComplete label="Outlined" variant="outlined" />
                            <TextField className={classes.input} id="txt-mitake-account" focused autoComplete label="Outlined" variant="outlined" />
                            <TextField className={classes.input} id="txt-mitake-password" focused autoComplete label="Outlined" variant="outlined" />
                        </CardContent>

                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </Container>
    )
}

export default SettingPage;