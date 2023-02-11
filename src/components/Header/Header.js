import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='py-10 px-20'>
            <div className='flex text-center md:justify-between'>
                <div className='logo text-3xl font-bold  hidden md:block'>

                    <h1 className=''> <span className="text-white">SUMCT</span></h1>

                </div>
                <div className='font-bold text-xl menu '>
                    <Link to='/home'>Home</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/registration'>Registration</Link>
                    {/* <Link to='/button'>Contact</Link>
                    <Link to='/gallery'> Gallery</Link>
                    <Link to='/about'> About</Link> */}
                </div>
            </div>
        </nav>
    );
};

export default Header;