import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../contexts/AuthProvider';
import ConfirmationModal from '../../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../../Shared/Loading/Loading';

const MyProducts = () => {
    const [deleteProduct, setDeleteProduct] = useState(null)

    const closeModal = () => {
        setDeleteProduct(null)
    }



    const { user } = useContext(AuthContext)

    const url = `https://moto-resale-server.vercel.app/productss?email=${user?.email}`;

    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json()
            return data;
        }
    });

    //delete product handler
    const handleDeleteProduct = product => {
        fetch(`https://moto-resale-server.vercel.app/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch()
                    toast.success(`Product ${product.name} Deleted Successfully`)
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className=' text-3xl mb-5'>My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Location</th>
                            <th>Delete</th>
                            <th>Advertise</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            products &&
                            products?.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full ring ring-warning ring-offset-base-100 ring-offset-2">
                                        <img src={product.img} alt="Tailwind-CSS-Avatar-component" />
                                    </div>
                                </div></td>
                                <td>{product.name}</td>
                                <td>TK, {product.resaleprice}</td>
                                <td>{product.location}</td>
                                <td>
                                    <label onClick={() => setDeleteProduct(product)} htmlFor="confirmation-modal" className="btn  btn-warning btn-sm">Delete</label>

                                </td>
                                <td><button className='btn btn-ghost border-red-50 btn-sm'>Advertise</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteProduct && <ConfirmationModal
                    title={`Are You Sure you want to delete ?`}
                    message={`If you delete ${deleteProduct.name}. It Cant not be undone`}
                    successAction={handleDeleteProduct}
                    successButtonName="Delete"
                    modalData={deleteProduct}
                    closeModal={closeModal}
                >

                </ConfirmationModal>
            }
        </div>
    );
};



export default MyProducts;