import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const { user } = useContext(AuthContext)

    const url = `https://moto-resale-server.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json()
            return data;
        }
    })

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className=' text-3xl mb-5'>My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Order Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-16 rounded">
                                        <img src={booking.img} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div></td>
                                <td>{booking.name}</td>
                                <td>TK, {booking.resaleprice}</td>
                                <td>
                                    {
                                        booking.resaleprice && !booking.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        >
                                            <button
                                                className='btn btn-warning btn-sm hover:bg-yellow-200'
                                            >PAY</button>
                                        </Link>
                                    }
                                    {
                                        booking.resaleprice && booking.paid && <span className='text-primary'>PAID</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;