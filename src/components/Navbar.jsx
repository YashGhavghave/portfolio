import React from 'react';

function Navbar() {
    return (
        <div>
            <div
                className="h-[6vh] w-[78vw] bg-gradient-to-r from-purple-500 to-red-500 fixed top-[5vh] left-[20vw] rounded-[60px] flex gap-[5vw] justify-center items-center text-white text-2xl font-bold hover:shadow-[0px_0px_30px_rgba(255,30,10,200)] transition-all duration-500 max-sm:left-[20vw] max-sm:rounded-r">
                <div><a href="#" className='hover:text-green-400 text-gray-200 max-sm:bg-transparent max-sm:pl-[20px]'>Home</a></div>
                <div><a href="#" className='hover:text-green-400 text-gray-200 max-sm:bg-transparent'>About</a></div>
                <div><a href="#" className='hover:text-green-400 text-gray-200 max-sm:bg-transparent'>Projects</a></div>
                <div><a href="#" className='hover:text-green-400 text-gray-200 max-sm:bg-transparent'>Contact</a></div>
            </div>
            <div className="content pt-[4vh]"/>
        </div>
    );
}

export default Navbar;
