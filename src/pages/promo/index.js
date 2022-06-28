import React from 'react';

const Promolist = React.lazy(() => import('./Promolist'));
const Promoaddform = React.lazy(() => import('./PromAddform'));

export const promoPagesConfigs = [
  {
    path: '/promo/list',
    element: <Promolist />,
  },
  {
    path: '/promo/addform',
    element: <Promoaddform />,
  },
  
];
