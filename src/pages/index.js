import { initialUrl } from '../shared/constants/AppConst';
import Error403 from './errorPages/Error403';
import React from 'react';
import Error404 from './errorPages/Error404';

import { authRouteConfig } from './auth';
import { dashboardConfig } from './dashboard';
import { errorPagesConfigs } from './errorPages';
import { profileConfig } from './profile';
import { samplePagesConfigs } from './sample';
import { promoPagesConfigs } from './promo';

const authorizedStructure = {
  fallbackPath: '/signin',
  unAuthorizedComponent: <Error403 />,
  routes: [
    ...dashboardConfig,
    ...samplePagesConfigs,
    ...promoPagesConfigs,
    ...profileConfig
  ],
};

const unAuthorizedStructure = {
  fallbackPath: initialUrl,
  routes: authRouteConfig,
};

const anonymousStructure = {
  routes: errorPagesConfigs.concat([
    {
      path: '*',
      exact: true,
      element: <Error404 />,
    },
  ]),
};

export { authorizedStructure, unAuthorizedStructure, anonymousStructure };
