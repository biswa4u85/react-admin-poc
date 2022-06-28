import React from 'react';
import { BiAlignLeft } from 'react-icons/bi';
import { MdOutlineAnalytics } from 'react-icons/md';
import { FaRegHospital } from 'react-icons/fa';
import { RoutePermittedRole } from '../shared/constants/AppEnums';

const routesConfig = [
  {
    id: 'dashboards',
    title: 'Application',
    messageId: 'sidebar.application',
    permittedRole: RoutePermittedRole.superadmin,
    type: 'group',
    children: [
      {
        id: 'analytics',
        title: 'Analytics',
        messageId: 'sidebar.app.dashboard.analytics',
        icon: <MdOutlineAnalytics />,
        path: '/dashboards/analytics',
      },
      {
        id: 'health-care',
        title: 'Health Care',
        messageId: 'sidebar.healthCare',
        icon: <FaRegHospital />,
        path: '/dashboards/health-care',
      },
    ],
  },
  {
    id: 'app',
    title: 'Sample',
    messageId: 'sidebar.sample',
    type: 'group',
    permittedRole: RoutePermittedRole.superadmin,
    children: [
      {
        id: 'page-1',
        title: 'Page 1',
        messageId: 'sidebar.sample.page1',
        type: 'item',
        icon: <BiAlignLeft />,
        path: '/sample/page-1',
      },
      {
        id: 'page-2',
        title: 'Page 2',
        messageId: 'sidebar.sample.page2',
        type: 'item',
        icon: <BiAlignLeft />,
        path: '/sample/page-2',
      },
    ],
  },
];
export default routesConfig;
