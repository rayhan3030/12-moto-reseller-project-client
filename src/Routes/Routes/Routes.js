import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AddProducts from "../../Pages/Dashboard/AddProducts/AddProducts";
import Allusers from "../../Pages/Dashboard/AllUsers/Allusers";
import MyProducts from "../../Pages/Dashboard/Dashboard/MyProducts/MyProducts";
import Payment from "../../Pages/Dashboard/Dashboard/Payment/Payment";
import MyOrders from "../../Pages/Dashboard/MyOrders/MyOrders";
import CategoryId from "../../Pages/HomePage/Category/CategoryId";
import Home from "../../Pages/HomePage/Home/Home";
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import Testing from "../../Pages/SignUp/Testing";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/testing',
                element: <Testing></Testing>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <PrivateRoute> <CategoryId></CategoryId></PrivateRoute>,
                loader: ({ params }) => fetch(`https://moto-resale-server.vercel.app/category/${params.id}`)

            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashboard/allusers',
                element: <AdminRoute><Allusers></Allusers></AdminRoute>
            },
            {
                path: '/dashboard/addproducts',
                element: <SellerRoute><AddProducts></AddProducts></SellerRoute>
            },
            {
                path: '/dashboard/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader: ({ params }) => fetch(`https://moto-resale-server.vercel.app/bookings/${params.id}`)
            },

        ]
    }
])

export default router;