import React from 'react'
import Image from 'next/image'
import image from  '../../public/image.svg'
 const Header = () => {
  return (
    <div>
<div>
    <h1 className='font-[inter] text-4xl w-600 ml-10'>
       Lessons and insights 
    </h1>
    <h1 className='font-[inter]  text-4xl w-600 ml-10 py-4 text-[#4CAF4F]'>
       from 8 years
    </h1>
    <h3  className='ml-10 py-4'>
    Where to grow your business as a photographer: site or social media
    </h3>
    <button className='ml-10 py-2 rounded-md gap-6.96px bg-[#4CAF4F] px-6'>Register</button>

</div>

    </div>
  )
}
export default Header
