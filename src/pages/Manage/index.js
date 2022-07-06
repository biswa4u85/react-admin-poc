import React from 'react';

const ManageList = React.lazy(() => import('./ManageList'));
const Addnewbrand = React.lazy(() => import('./Addnewbrand'));


export const manageRouteConfigs = [
  {
    path: '/manage/managelist',
    element: <ManageList />,
  },
  
  {
    path: '/manage/addnewbrand',
    element: <Addnewbrand />,
  },
  
];