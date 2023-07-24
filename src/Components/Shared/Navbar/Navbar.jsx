// import React from 'react';

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        // <div className="navbar bg-purple-500 text-white px-10">
        //     <div className="navbar-start">
        //         <h1>College Booking</h1>
        //     </div>
        //     <div className="navbar-center hidden lg:flex gap-7">
        //         <Link to="/">Home</Link>
        //         <Link to="/colleges">Colleges</Link>
        //         <Link to="/admission">Admission</Link>
        //         <Link to="/myCollege">My College</Link>
        //     </div>
        //     <div className="navbar-end">
        //         <a className="btn">Button</a>
        //     </div>
        // </div>
        <div className="navbar bg-purple-100 text-black px-10 py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/">Home</Link>
                        <Link to="/colleges">Colleges</Link>
                        <Link to="/admission">Admission</Link>
                        <Link to="/myCollege">My College</Link>
                    </ul>
                </div>
                <Link to="/" className="text-xl md:text-3xl">College Booking</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-7 text-lg font-semibold">
                    <Link to="/">Home</Link>
                    <Link to="/colleges">Colleges</Link>
                    <Link to="/admission">Admission</Link>
                    <Link to="/myCollege">My College</Link>
                </ul>
            </div>
            <div className="navbar-end">
            <Link to="/" className="btn btn-warning">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;