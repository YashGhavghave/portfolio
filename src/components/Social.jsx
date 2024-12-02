import React from 'react'

function Social() {
  return (
    <div className='w-[20vw] h-[15vh] absolute top-[60vh] left-[40vw] max-sm:left-[50px] flex justify-evenly bg-white max-sm:absolute max-sm:w-[80vw] max-sm:h-[10vh] max-sm:justify-evenly max-sm-320:top-[75vh] max-sm:top-[74vh] items-center'>
        <a href='https://www.linkedin.com/in/yash-ghavghave-3b0782262/?originalSubdomain=in' className=' h-[10vh] w-[7.5vw] block max-sm:h-[8vh] max-sm:w-[26vw] items-center' target='_blank ' >
      <img src='\src\assets\Linked_in-removebg-preview (1).png' className='bg-white inline-block  h-[14vh] w-[10vw] max-sm:h-[12vh] max-sm:w-[100vw]'/>
        </a>    
        <a href='https://github.com/YashGhavghave' className='h-[10vh] w-[6.5vw] max-sm:h-[8vh] max-sm:w-[20vw] items-center max-sm:pt-3 max-2xl:pt-1 max-sm:' target='_blank'>
      <img src='src\assets\wg.png' />
        </a>     
        <a href='https://www.reddit.com/user/Nearby_Professor_251/' className='h-[10vh] w-[7vw] block max-sm:h-[8vh] max-sm:w-[40vw] max-sm:pt-[0vh] max-sm-320:pt-0 max-2xl:pt-[12px] max-sm-320:h-[2vh]  ' target='_blank'>
      <img src='src\assets\fe23a7aa94317e4819ef2fa961bd3892.jpg ' className='h-[11.5vh] w-[10vw] pl-1 pt-5 max-sm:w-[23vw] max-sm:h-[10vh] max-sm:pl-1 max-sm:top-2.7'/>
        </a>    
    </div>
  )
}

export default Social

