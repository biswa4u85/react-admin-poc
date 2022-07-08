import { initialUrl } from '../shared/constants/AppConst';
import Error403 from './errorPages/Error403';
import React from 'react';
import Error404 from './errorPages/Error404';

import { authRouteConfig } from './auth';
import { dashboardConfig } from './dashboard';
import { errorPagesConfigs } from './errorPages';
import { profileConfig } from './profile';
import { celebritieRouteConfigs } from './Celebrities';
import { manageRouteConfigs } from './Managebrand';
import { ManageusersRouteConfigs } from './Manageusers';

const authorizedStructure = {
  fallbackPath: '/signin',
  unAuthorizedComponent: <Error403 />,
  routes: [
    ...dashboardConfig,
    ...profileConfig,
    ...celebritieRouteConfigs,
    ...manageRouteConfigs,
    ...ManageusersRouteConfigs,
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
