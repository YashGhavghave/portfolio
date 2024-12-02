import React from 'react'
import PropTypes from 'prop-types'

const alt =()=>{
  alert("Form submitted")
}

function Contacts() {
  return (
    <>
    <div className='h-[100vh] w-[100vw] bg-gradient-to-r from-blue-500 to-green-500 '>
        <div className='h-[40vh] w-[40vw] bg-black bg-opacity-50 fixed top-[20vh] left-[30vw] rounded-xl backdrop-blur-3xl' >
            <input type="email" pattern="^[a-zA-Z0-9._%+-]+@gmail\.com$" placeholder='    Email' required className='w-[80%] relative top-[8vh] left-[10%] mb-2 border-none block font-medium h-[8%] rounded-md'/>
            <input type='text' placeholder='   Email Description' className='w-[80%]  relative top-[12vh] left-[10%] mb-2 block font-medium h-[8%] rounded-md border-none'/>
            <button className='w-[80%] relative top-[15vh] left-[10%] mb-2 block font-medium h-[8%] rounded-md border-none bg-blue-500' onClick={alt}>Submit</button>
        </div>
   
    </div>
    </>

  )
}


export default Contacts

