import React from 'react';
import { Paper, Grid, Container,Typography } from "@material-ui/core";
import SmsTextTemplate from "../../imgs/sms-text-template.png"


const TextTemplatePage = () => {
    return (
        <>
            <Grid
                direction="row"
                spacing={2}
            >
                <Container maxWidth="sm">
                    <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
                </Container>

                <Container style={{ background: 'pink' }}></Container>

            </Grid>

        </>
    )
}

export default TextTemplatePage;