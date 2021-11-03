import axios from 'axios'
import { validIsEmpty } from './Validator';

// assemblingService 相關的 Server
const goldenServer = axios.create({
    baseURL: "http://localhost:9090/api/",
    headers: {
        'Content-Type': 'application/json',
        Pragma: 'no-cache',
        crossdomain: true
    }
});


// Test 相關的 api
export const apiControllerA = sParam => goldenServer.get('/ControllerA/' + sParam);
export const apiControllerB = sParam => goldenServer.get('/ControllerB/' + sParam);
export const apiControllerBAction1 = (sParam1, sParam2, sParam3) => goldenServer.post('/ControllerB/Action1', {
    'Param1': sParam1,
    'Param2': validIsEmpty(sParam2) ? 'ReactJS' : sParam2,
    'Param3': sParam3
});
