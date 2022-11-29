import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AddProducts = () => {
    const { user } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();

    //imgbb key
    const imageHostKey = process.env.REACT_APP_imgbb_key
    // console.log(imageHostKey);

    const navigate = useNavigate();


    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch('https://moto-resale-server.vercel.app/category')
            .then(res => res.json())
    })


    const handleAddProducts = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        name: data.name,
                        sellername: data.sellername,
                        email: data.email,
                        originalprice: data.originalprice,
                        resaleprice: data.resaleprice,
                        conditiontype: data.conditiontype,
                        contactnumber: data.contactnumber,
                        location: data.location,
                        description: data.description,
                        purchaseyear: data.purchaseyear,
                        yearsofuse: data.yearsofuse,
                        categoryId: data.categoryId,
                        img: imgData.data.url,

                    }

                    // save product informatiuon to the db
                    fetch('https://moto-resale-server.vercel.app/products', {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/myproducts')
                        })
                }
            })
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>
            <h2 className='text-3xl'>Add Products</h2>

            <form className='' onSubmit={handleSubmit(handleAddProducts)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">  <span className="label-text">Bike Name</span></label>
                    <input type="text"
                        {...register("name", {
                            required: "Name is Required"
                        })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.name && <p className='text-red-500'>{errors.name?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">  <span className="label-text"> Seller Name</span></label>
                    <input type="text"
                        {...register("sellername", {
                            required: "sellername is Required"
                        })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.sellername && <p className='text-red-500'>{errors.sellername?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">  <span className="label-text"> Email</span></label>
                    <input type="email" defaultValue={user.email}
                        {...register("email", {

                        })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">  <span className="label-text">Original Price</span></label>
                    <input type="text"
                        {...register("originalprice", {
                            required: "originalprice is Required"
                        })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.originalprice && <p className='text-red-500'>{errors.originalprice?.message}</p>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">  <span className="label-text">Resell Price</span></label>
                    <input type="text"
                        {...register("resaleprice", {
                            required: "resaleprice is Required"
                        })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.resaleprice && <p className='text-red-500'>{errors.resaleprice?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Condition Type </span></label>
                    <select defaultValue
                        {...register('conditiontype')}
                        className="select select-bordered w-full max-w-xs">
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                    {errors.conditiontype && <p className='text-red-500'>{errors.conditiontype?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">  <span className="label-text">Contact Number</span></label>
                    <input type="text"
                        {...register("contactnumber", {
                            required: "contactnumber is Required"
                        })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.contactnumber && <p className='text-red-500'>{errors.contactnumber?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">  <span className="label-text">Location</span></label>
                    <input type="text"
                        {...register("location", {
                            required: "location is Required"
                        })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.location && <p className='text-red-500'>{errors.location?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">  <span className="label-text">Description</span></label>
                    <input type="text"
                        {...register("description", {
                            required: "description is Required"
                        })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.description && <p className='text-red-500'>{errors.description?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">  <span className="label-text">Year of Purchase</span></label>
                    <input type="text"
                        {...register("purchaseyear", {
                            required: "purchaseyear is Required"
                        })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.purchaseyear && <p className='text-red-500'>{errors.purchaseyear?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">  <span className="label-text">Year of Use</span></label>
                    <input type="text"
                        {...register("yearsofuse", {
                            required: "yearsofuse is Required"
                        })}
                        className="input input-bordered w-full max-w-xs " />
                    {errors.yearsofuse && <p className='text-red-500'>{errors.yearsofuse?.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category- <span className='text-warning'>1st is 150cc, 2nd is 125cc, 3rd is 100cc</span> </span></label>
                    <select defaultValue
                        {...register('categoryId')}
                        className="select select-warning w-full max-w-xs">
                        <option defaultValue disabled >Select Bike Category that you want to sell</option>
                        {
                            categories.map(category => <option className='text-white'
                                key={category._id}
                                value={category._id}
                            >{category.catname} {" "}  {category._id}</option>)
                        }

                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                </div>
                {/* date */}


                <input className='btn bg-gradient-to-r from-yellow-400 to-yellow-100 text-black w-full mt-5' value='Add Products' type="submit" />

            </form>
        </div>

    );
};

export default AddProducts;