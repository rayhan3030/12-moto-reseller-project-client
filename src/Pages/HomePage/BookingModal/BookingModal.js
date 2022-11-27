import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ bikes }) => {
    const { user } = useContext(AuthContext)
    const { name, categoryId } = bikes;
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-yellow-300 mb-5">🏍️ {name}</h3>
                    <form className='grid grid-cols-1 gap-3 mt-6'>
                        <input type="text" placeholder="Type here" defaultValue={name} disabled className=" text-white text-center input input-bordered input-warning w-full" />
                        <input type="text" placeholder="Type here" defaultValue={user?.displayName} disabled className="text-white text-center input input-bordered input-warning w-full " />
                        <input type="text" placeholder="Type here" defaultValue={user?.email} disabled className=" text-white text-center input input-bordered input-warning w-full " />
                        <input type="text" placeholder="Type Your Phone Number" className="input input-bordered input-warning w-full " />
                        <input type="text" placeholder="Type Your Location" className="input input-bordered input-warning w-full " />
                        <input type="text" placeholder="Type here" defaultValue={categoryId} disabled className=" text-white text-center input input-bordered input-warning w-full" />
                        <input className='btn w-full  text-yellow-400' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;