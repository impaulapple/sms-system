import DashboardIcon from '@material-ui/icons/Dashboard';
import EjectIcon from '@material-ui/icons/Eject';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import React from 'react';

const TestPage = React.lazy(() => import('./modules/TestPage'));
const SMSPage = React.lazy(() => import('./modules/SMS_Module/index'));
const Test3Page = React.lazy(() => import('./modules/Test3Page'));

const routes = [
  {
    path: '/SMSPage', name: 'SMSPage', component: SMSPage, icon: <MenuBookIcon fontSize='small' />
  },
  {
    path: '/Test3', name: 'Test3', component: Test3Page, protacted: true, icon: <DashboardIcon fontSize='small' />
  }
];

export default routes;