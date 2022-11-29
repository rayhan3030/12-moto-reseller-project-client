import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navebar from '../Pages/Shared/Navebar/Navebar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)
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
                    <ul className="menu p-4 w-80 text-base-content mt-10 gap-5">






                        {
                            isBuyer && <>
                                <li className='border rounded-lg border-black text-white'><Link to='/dashboard/myorders'>My Orders</Link></li>
                            </>
                        }





                        {
                            isAdmin && <>
                                <li className='border rounded-lg border-black text-white'><Link to='/dashboard/allusers'>All Sellers & All Buyers</Link></li>
                            </>
                        }

                        {
                            isSeller && <>
                                <li className='border rounded-lg border-black text-white'><Link to='/dashboard/addproducts'>Add Products</Link></li>
                                <li className='border rounded-lg border-black text-white'><Link to='/dashboard/myproducts'>My Products</Link></li>
                            </>
                        }



                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;