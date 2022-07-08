import React from 'react';

const ManageList = React.lazy(() => import('./ManageList'));
const Addnewbrand = React.lazy(() => import('./Addnewbrand'));


export const manageRouteConfigs = [
  {
    path: '/managebrand/managelist',
    element: <ManageList />,
  },
  
  {
    path: '/managebrand/addnewbrand',
    element: <Addnewbrand />,
  },
  
];