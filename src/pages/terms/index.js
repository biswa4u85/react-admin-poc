import React from 'react';

const Termslist = React.lazy(() => import('./Termslist'));


export const promoPagesConfigs = [
  {
    path: '/terms/list',
    element: <Termslist />,
  },
  
];
