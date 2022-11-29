import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const Allusers = () => {
    const [deleteUser, setDeleteUser] = useState(null)

    const closeModal = () => {
        setDeleteUser(null)
    }





    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://moto-resale-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = id => {
        fetch(`https://moto-resale-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfully')
                    refetch()
                }
            })
    }
    const handleMakeSeller = id => {
        fetch(`https://moto-resale-server.vercel.app/users/seller/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Seller Successfully')
                    refetch()
                }
            })
    }
    const handleMakeBuyer = id => {
        fetch(`https://moto-resale-server.vercel.app/users/buyer/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Buyer Successfully')
                    refetch()
                }
            })
    }


    //delete product handler
    const handleDeleteUser = user => {
        fetch(`https://moto-resale-server.vercel.app/users/${user._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`Product ${user.name} Deleted Successfully`)
                }
            })
    }

    return (
        <div>
            <h2 className='text-3xl'>All users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Type</th>
                            <th>Role Set Admin</th>
                            <th>Role Set Seller</th>
                            <th>Role Set Buyer</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td>{user?.role !== 'seller' && <button onClick={() => handleMakeSeller(user._id)} className='btn btn-xs btn-primary'>Make Seller</button>}</td>
                                <td>{user?.role !== 'buyer' && <button onClick={() => handleMakeBuyer(user._id)} className='btn btn-xs btn-primary'>Make Buyer</button>}</td>
                                <td>
                                    <label onClick={() => setDeleteUser(user)} htmlFor="confirmation-modal" className="btn  btn-warning btn-sm">Delete</label>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {
                deleteUser && <ConfirmationModal
                    title={`Are You Sure you want to delete ?`}
                    message={`If you delete ${deleteUser.name}. It Cant not be undone`}
                    successAction={handleDeleteUser}
                    modalData={deleteUser}
                    successButtonName="Delete"
                    closeModal={closeModal}
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default Allusers;