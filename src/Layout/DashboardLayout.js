import React from 'react';
import { Outlet } from 'react-router-dom';
import Navebar from '../Pages/Shared/Navebar/Navebar';

const DashboardLayout = () => {
    return (
        <div>
            <Navebar></Navebar>
            <Outlet></Outlet>
        </div>
    );
};

export default DashboardLayout;