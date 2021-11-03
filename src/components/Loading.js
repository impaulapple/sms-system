import React from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';

const theme = createTheme({
    overrides: {
        MuiBackdrop: {
            root: {
                backgroundColor: 'rgb(0 0 0 / 25%)'
            }
        }
    }
});

const Loading = () => {
    return (
        <ThemeProvider theme={theme}>
            <Backdrop open={true}>
                <CircularProgress size={150} />
            </Backdrop>
        </ThemeProvider>
    )
}
export default Loading;