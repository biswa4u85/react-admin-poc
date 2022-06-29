import React from 'react';

const Promolist = React.lazy(() => import('./Promolist'));
const Promoaddform = React.lazy(() => import('./PromAddform'));
const PromEdit = React.lazy(() => import('./PromEditScreen'));

export const promoPagesConfigs = [
  {
    path: '/promo/list',
    element: <Promolist />,
  },
  {
    path: '/promo/addform',
    element: <Promoaddform />,
  },
  {
    path: '/promo/editform',
    element: <PromEdit />,
  },
  
];
