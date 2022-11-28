import React from 'react';
import { Link } from 'react-router-dom';

const Testing = () => {
    return (
        <div className="dropdown">
            <label tabIndex={0} className="btn m-1">Hello</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to="/signup">Item 1</Link></li>
                <li><Link>Item 2</Link></li>
            </ul>
        </div>
    );
};

export default Testing;