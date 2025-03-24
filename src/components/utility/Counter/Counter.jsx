import { decrement, increment } from '@/redux/counterSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <>
        <div className='text-center m-3 p-3'>
            <div className={`bg-gray-800 flex justify-center items-center rounded-full relative  w-[100px] h-[100px] counter-body m-auto mb-3 ${value > 10 ? "text-green-500" : value < 0 ? "text-red-500" : "text-white"} `}>{value}</div>
            <button className=' mx-3 w-[30px] h-[30px] bg-gray-500 text-white  rounded-full'
            onClick={() => dispatch(decrement())}
            >-</button>
            <button className='mx-3 w-[30px] h-[30px] bg-gray-500 text-white  rounded-full'
            onClick={() => dispatch(increment())}
            >+</button>
            
        </div>
        { value > 10 && ( <p className='text-green-500'>Value is greater than 10</p> )}
        { value < 0 && ( <p className='text-red-500 '>Value is lesser than 0</p> )}
    </>
  )
}

export default Counter