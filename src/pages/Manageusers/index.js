import React from 'react';

const Users = React.lazy(() => import('./Users'));
const Viewuser = React.lazy(() => import('./Viewuser '));



export const ManageusersRouteConfigs = [
    {
        path: '/manageusers/users',
        element: <Users />,
    },
    {
        path: '/manageusers/viewuser',
        element: <Viewuser />,
    },



];