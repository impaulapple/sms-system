import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import { makeStyles } from '@material-ui/core/styles';
import { HotKeys } from 'react-hotkeys';

const useStyles = makeStyles(() => ({
    title: {
        color: "#fff",
        background: "#f44336",
    },
    content: {
        margin: 0,
        minHeight: '100px',
        fontStretch: 'initial',
        minWidth: "380px"
    },
    actions: {
        background: "#f8f9fa",
    }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialog = ({ bShow, sTitle, sContent, closeFunc }) => {
    const classes = useStyles();


    const hideAlert = React.useCallback(() => {
        setForceHide(true);
    }, [])

    const handlers = {
        HIDE_ALERT: hideAlert
    };

    const [paramForceHide, setForceHide] = React.useState(false)
    return (
        <HotKeys handlers={handlers}>
            <Dialog
                open={bShow && !paramForceHide}
                TransitionComponent={Transition}
                keepMounted
                onClose={closeFunc}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle className={classes.title} id="alert-dialog-slide-title">{sTitle}</DialogTitle>
                <DialogContent className={classes.content}>
                    <DialogContentText id="alert-dialog-slide-description">
                        {sContent}
                    </DialogContentText>
                </DialogContent>
                <DialogActions className={classes.actions}>
                    <Button onClick={closeFunc} color="primary">
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </HotKeys>

    );
}

export default AlertDialog;