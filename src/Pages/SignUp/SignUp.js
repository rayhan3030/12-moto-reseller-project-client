import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const SignUp = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('')
    const navigate = useNavigate()

    const handleSignUp = (data) => {

        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('user created successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        navigate('/');
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.error(error)
                setSignUpError(error.message)
            });
    }


    const handleGoogleSignIe = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);


            })
            .catch(err => console.error(err));
    }
    // error fixed 
    return (
        <div className='h-[600px] flex justify-center items-center '>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text" {...register("name", {
                            required: "Name is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"  {...register("email", {
                            required: true
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"  {...register("password", {
                            required: "password is required",
                            minLength: { value: 6, message: "password must be 6 charecters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>
                    <input className='btn bg-gradient-to-r from-yellow-400 to-yellow-100 text-black w-full mt-5' value='SignUp' type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>

                <p>Already Have an Account? <Link to="/login"><span className='text-yellow-300'>Login</span></Link> </p>
                <div className='divider'>OR</div>
                <button onClick={handleGoogleSignIe} className='btn btn-outline w-full'>CONTINE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;