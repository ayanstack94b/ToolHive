import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import favicon from '../../../src/assets/favicon.png';
const Navbar = () => {
    const link = <>
        <li><a href='/' className='font-semibold'>Products</a></li>
        <li><a href='/' className='font-semibold'>Features</a></li>
        <li><a href='/' className='font-semibold'>Pricing</a></li>
        <li><a href='/' className='font-semibold'>Testimonials</a></li>
        <li><a href='/' className='font-semibold'>FAQ</a></li>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm p-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {link}
                    </ul>
                </div>
                <p className="flex items-center justify-center gap-1 md:text-2xl text-xl font-bold md:font-extrabold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent"><img className='w-8.5 h-8.5 hidden md:block' src={favicon} alt="" /> ToolHive</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {link}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <CiShoppingCart size={30} />
                <p className="text-lg font-medium">Login</p>
                <a className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-4xl  hover:opacity-70 transition-opacity duration-500">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;