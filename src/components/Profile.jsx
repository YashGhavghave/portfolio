import React from 'react'
import PropTypes from 'prop-types'

function Profile(props) {
  return (
    <div className='bg-black w-[25vw] h-[50vh] fixed top-[25vh] left-[7vw] rounded-full object-cover overflow-hidden aspect-auto hover:shadow-[0px_0px_30px_rgba(255,0,0,0.8)] transition-all duration-500' >
      <img src="src\assets\thomas-shelby-haircut.webp" alt="" className='h-[100%] w-[100%] '/>
    </div>
  )
}

export default Profile

// hover:shadow-[0px_1px_50px_rgba(0,0,0,1.8)] transition-all duration-300 ease-in-out