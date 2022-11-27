import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ bikes, setBikes }) => {
    const { user } = useContext(AuthContext)
    const { name, categoryId, cc, img, resaleprice, originalprice, yearsofuse, posttime, sellername } = bikes;

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const displayName = form.displayName.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const categoryId = form.categoryId.value;

        const booking = {
            name,
            cc,
            displayName,
            email,
            phone,
            location,
            categoryId
        }


        fetch('http://localhost:5001/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setBikes(null)
                toast.success('Booking Confirmed')
            })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-yellow-300 mb-5">🏍️ {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-6'>
                        <input name="name" type="name" placeholder="Type here" defaultValue={name} disabled className=" text-white text-center input input-bordered input-warning w-full" />
                        <input name="displayName" type="displayName" placeholder="Type here" defaultValue={user?.displayName} disabled className="text-white text-center input input-bordered input-warning w-full " />
                        <input name="email" type="email" placeholder="Type here" defaultValue={user?.email} disabled className=" text-white text-center input input-bordered input-warning w-full " />
                        <input name="phone" type="phone" placeholder="Type Your Phone Number" className="input input-bordered input-warning w-full " />
                        <input name="location" type="location" placeholder="Type Your Location" className="input input-bordered input-warning w-full " />
                        <input name="categoryId" type="categoryId" placeholder="Type here" defaultValue={categoryId} disabled className=" text-white text-center input input-bordered input-warning w-full" />
                        <input className='btn w-full  text-yellow-400' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;