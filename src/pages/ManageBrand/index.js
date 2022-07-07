import React from 'react';

const ManageList = React.lazy(() => import('./ManageList'));
const Addnewbrand = React.lazy(() => import('./Addnewbrand'));


export const manageRouteConfigs = [
  {
    path: '/ManageBrand/managelist',
    element: <ManageList />,
  },
  
  {
    path: '/ManageBrand/addnewbrand',
    element: <Addnewbrand />,
  },
  
];