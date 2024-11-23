import React from 'react'
import PropTypes from 'prop-types'

function Profile(props) {
  return (
    <div className='bg-black w-[25vw] h-[50vh] fixed top-[25vh] left-[7vw] rounded-full object-cover overflow-hidden  hover:shadow-[0px_0px_30px_rgba(255,0,0,0.8)] transition-all duration-500 max-sm-320:hover:shadow-[0px_0px_30px_rgba(255,255,80,255)] max-sm-320:left-[3.6vw] max-sm:w-[300px] max-sm:h-[300px] max-sm:flex max-sm:justify-center  max-sm:left-[14vw] max-sm-320:top-[65vw] max-sm: justify-evenly max-sm:absolute max-2xl:w-[30vw] max-xl:h-[36vh]' >
      <img src="src\assets\thomas-shelby-haircut.webp" alt="" className='h-[100%] w-[100%] '/>
    </div>
  )
}

export default Profile

// hover:shadow-[0px_1px_50px_rgba(0,0,0,1.8)] transition-all duration-300 ease-in-out