import React from 'react';

const Users = React.lazy(() => import('./Users'));



export const ManageusersRouteConfigs = [
    {
        path: '/manageusers/users',
        element: <Users />,
    },



];