import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div
                className="h-[6vh] w-[40vw]    bg-gradient-to-r from-purple-500 to-red-500 fixed top-[5vh] left-[30vw] rounded-[60px] flex  justify-evenly items-center text-white text-2xl  font-bold hover:shadow-[0px_0px_30px_rgba(255,30,10,200)] transition-all duration-500 z-[1000] max-sm:top-[21.5vh] max-sm:left-0 max-sm:rounded-l-r  max-sm:w-[100vw] max-sm:hidden">
                <Link to="/" className='hover:text-green-400 text-gray-200 max-sm:bg-transparent'>Home</Link >
                    <Link to="/Projects" className='hover:text-green-400 text-gray-200 max-sm:bg-transparent'>Projects</Link >
                        <Link to="/Contacts" className='hover:text-green-400 text-gray-200 max-sm:bg-transparent'>Contact</Link >
                            
        </div>
        </div>
            );
}

            export default Navbar;