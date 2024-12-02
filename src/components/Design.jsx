import React from 'react'


function Footer(props) {
  return (
    <>
      <div className='h-[10vh] w-[100vw] bg-white rotate-45 relative left-[35vw]'></div>
      <div className='h-[11vh] w-[25vw] bg-white relative left-[60vw] top-[8vh] transform rotate-[135deg] max-sm-320:top-[0vh] max-sm:top-0'></div>
      <div className='h-[77vh] w-[7.7vw] bg-black absolute transform rotate-[134deg] left-[90.4vw] top-[2.8vh] z-1000 max-sm:left-[90vw] max-sm:rotate-[150deg] max-sm:hidden max-sm:absolute max-sm:w-full text-white'></div>
    </>
  )
}

export default Footer

