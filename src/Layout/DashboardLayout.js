import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navebar from '../Pages/Shared/Navebar/Navebar';

const DashboardLayout = () => {
    return (
        <div>
            <Navebar></Navebar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to='/myorders'>Sidebar Item 1</Link></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;