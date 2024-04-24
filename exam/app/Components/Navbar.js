import React from 'react'

 const Navbar = () => {
  return (
   <div >
      <div className='flex justify-between mt-4 ml-7 py-4 px-4' >
      <h2>
        Nexcent
      </h2>
      <div className='flex flex-row gap-4 mr-7 mt-4'>
       <h2 className=''> Home  </h2>
       <h2> Feature </h2>
       <h2> Community  </h2>
       <h2> Pricing  </h2>
    <button className='text-white bg-[#4CAF4F] px-4 py-2 rounded-md '> Register Now </button>
      </div>
    </div>
   </div>
 
  )
}
export default Navbar
