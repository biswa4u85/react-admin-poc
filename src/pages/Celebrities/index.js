import React from 'react';

const Listings = React.lazy(() => import('./Listings'));
const Addform = React.lazy(() => import('./Addform'));
const Details = React.lazy(() => import('./Details'));

export const celebritieRouteConfigs = [
  {
    path: '/celebrities/list',
    element: <Listings />,
  },
  {
    path: '/celebrities/addform',
    element: <Addform />,
  },
  {
    path: '/celebrities/details',
    element: <Details />,
  },
];