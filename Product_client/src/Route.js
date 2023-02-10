import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import DashboardLayout from './MainLayout/Dashboard'
import Menu from './Viewsaga/Filter'
import Home from './Viewsaga/Home'


export default function Route() {
  return useRoutes([
    {
        path: '/',
        element: <DashboardLayout />,
        children: [
            { path: 'Home', element: <Home /> },
            { path: 'Menu', element: <Menu /> }
            
        ]
    },
    { path: '*', element: <Navigate to='/404' replace /> }
])
}