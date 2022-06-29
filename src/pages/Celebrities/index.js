import React from 'react';

const Listings = React.lazy(() => import('./Listings'));
const Promoaddform = React.lazy(() => import('./PromAddform'));

export const celebritiesConfigs = [
  {
    path: '/celebrities/list',
    element: <Listings />,
  },
  {
    path: '/celebrities/addform',
    element: <Promoaddform />,
  },
];