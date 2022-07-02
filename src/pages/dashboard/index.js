import React from 'react';
import { RoutePermittedRole } from '../../shared/constants/AppEnums';

const HealthCare = React.lazy(() => import('./HealthCare'));
const Analytics = React.lazy(() => import('./Analytics'));

export const dashboardConfig = [
  {
    permittedRole: RoutePermittedRole.user,
    path: '/dashboards/health-care',
    element: <HealthCare />,
  },
  {
    path: '/dashboards/analytics',
    element: <Analytics />,
  },
];