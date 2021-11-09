import React from 'react';
import { Paper,Stack } from "@material-ui/core";
import SmsTextTemplate from "../../imgs/sms-text-template.png"



const TextTemplate = () => {
    return (
        <>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
            >
                <img width="400" src={SmsTextTemplate} />
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
      
        </>
    )
}

export default TextTemplate;