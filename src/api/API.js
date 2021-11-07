import axios from 'axios'
import { validIsEmpty } from './Validator';

// assemblingService 相關的 Server
const server = axios.create({
    baseURL: "http://localhost:5000/",
    headers: {
        'Content-Type': 'application/json',
        Pragma: 'no-cache',
        crossdomain: true
    }
});


// Test 相關的 api
export const apiControllerA = sParam => server.get('/ControllerA/' + sParam);
export const apiControllerB = sParam => server.get('/ControllerB/' + sParam);
export const apiControllerBAction1 = (sParam1, sParam2, sParam3) => server.post('/ControllerB/Action1', {
    'Param1': sParam1,
    'Param2': validIsEmpty(sParam2) ? 'ReactJS' : sParam2,
    'Param3': sParam3
});

export const apiConvertFileToJson = sBase64String => server.post('/DataSources/ConvertToJson',{
    'FileBase64':sBase64String
});