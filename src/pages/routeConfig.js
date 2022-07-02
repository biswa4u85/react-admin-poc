import React from 'react';
import { BsList } from 'react-icons/bs';
import { MdOutlineAnalytics } from 'react-icons/md';
import { FaRegHospital } from 'react-icons/fa';
import { GrAddCircle } from 'react-icons/gr';
import { RoutePermittedRole } from '../shared/constants/AppEnums';

const sidebarRouteConfig = [
  {
    id: 'dashboards',
    title: 'Dashboards',
    messageId: 'sidebar.app.dashboard',
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
    id: 'celebrities',
    title: 'Celebrities',
    messageId: 'sidebar.app.celebrities',
    type: 'group',
    permittedRole: RoutePermittedRole.superadmin,
    children: [
      {
        id: 'list',
        title: 'List',
        messageId: 'sidebar.listitem',
        type: 'item',
        icon: <BsList />,
        path: '/celebrities/list',
      },
      {
        id: 'add',
        title: 'Add New',
        messageId: 'sidebar.addnew',
        type: 'item',
        icon: <GrAddCircle />,
        path: '/celebrities/addform',
      },
    ],
  },
];
export default sidebarRouteConfig;
