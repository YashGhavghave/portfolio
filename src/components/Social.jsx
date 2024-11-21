import React from 'react'

function Social() {
  return (
    <span className='w-[30vw] h-[15vh] fixed top-[80vh] left-[4vw] flex gap-[1vw] bg-black'>
        <a href='https://www.linkedin.com/in/yash-ghavghave-3b0782262/?originalSubdomain=in' className=' h-[10vh] w-[6vw] block' target='_blank ' >
      <img src='\src\assets\Linked_in-removebg-preview (1).png' className='bg-black inline-block pt-2'/>
        </a>    
        <a href='https://github.com/YashGhavghave' className='h-[10vh] w-[6.5vw]' target='_blank'>
      <img src='src\assets\b51b78ecc9e5711274931774e433b5e6.jpg'/>
        </a>    
        <a href='https://www.reddit.com/user/Nearby_Professor_251/' className='h-[8vh] w-[5vw] pt-[3vh] pl-6' target='_blank'>
      <img src='\src\assets\reddit.png'/>
        </a>    
    </span>
  )
}

export default Social

