import React from 'react'


function Footer(props) {
  return (
    <>
      <div className='h-[10vh] w-[100vw] bg-white rotate-45 relative left-[35vw]'></div>
      <div className='h-[11vh] w-[30vw] bg-white absolute left-[54vw] top-[10vh] transform rotate-[135deg]'></div>
      <div className='h-[70vh] w-full bg-black fixed transform rotate-[136deg] left-[51.9vw] top-[20vh] z-[1000] max-sm:left-[90vw] max-sm:rotate-[150deg] max-sm:hidden max-sm:absolute max-sm:w-full'></div>
    </>
  )
}

export default Footer

