import React from 'react';
import { Paper,Grid } from "@material-ui/core";
import SmsTextTemplate from "../../imgs/sms-text-template.png"



const TextTemplatePage = () => {
    return (
        <>
            <Grid
                direction="row"
                spacing={2}
            >
                <img width="400" src={SmsTextTemplate} />
       
            </Grid>
      
        </>
    )
}

export default TextTemplatePage;