import React, { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import errorpic from '../../../assets/404.gif'

const DisplayError = () => {
    const error = useRouteError()

    const { logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(err => console.log(err))
    }

    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <p className='text-red-500'>Something Went Wrong</p>
                <p className='texy-red-400'>{error.statusText || error.message}</p>
                <img className='mask mask-hexagon' src={errorpic} alt="" />
                <h4 text-3xl> Please <button className='text-yellow-300 bg-black font-bold' onClick={handleLogOut}>Sign Out</button>And Log back in</h4>
            </div>
        </section >
    );
};

export default DisplayError;