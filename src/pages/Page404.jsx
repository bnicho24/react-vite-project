import React from 'react'
import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <>
    <div className='flex justify-center items-center flex-col'>
        <h2 className='text-red-500 text-[100px] m-3'>404</h2>
        <p className='text-2xl'>Page not found</p>
        <div className='flex justify-center items-center gap-2 mt-5'>
            <Link to="/main/dash" className='underline'><span>Dashboard</span></Link>
            <Link to="/main/home" className='underline'><span>Home</span></Link>
        </div>
    </div>
    </>
    
  )
}

export default Page404;