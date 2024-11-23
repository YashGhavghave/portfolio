import React from 'react';


function Navbar() {
    return (
        <div>
          
            <div
                className="h-[6vh] w-[60vw]    bg-gradient-to-r from-purple-500 to-red-500 fixed top-[5vh] left-[20vw] rounded-[60px] flex gap-[5vw] justify-center items-center text-white text-2xl  font-bold hover:shadow-[0px_0px_30px_rgba(255,30,10,200)] transition-all duration-500 z-[1000] max-sm:top-[21.5vh] max-sm:left-0 max-sm:rounded-l-r  max-sm:w-[100vw] max-sm:hidden">
                <div><a href="#" className='hover:text-green-400 text-gray-200 max-sm:bg-transparent'>Home</a></div>
                <div><a href="#" className='hover:text-green-400 text-gray-200 max-sm:bg-transparent'>About</a></div>
                <div><a href="#" className='hover:text-green-400 text-gray-200 max-sm:bg-transparent'>Projects</a></div>
                <div><a href="#" className='hover:text-green-400 text-gray-200 max-sm:bg-transparent'>Contact</a></div>
            </div>
                    
        </div>
    );
}

export default Navbar;
