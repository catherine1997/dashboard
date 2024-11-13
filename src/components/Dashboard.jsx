
import React from 'react'
import Chart from "./Chart"

const Dashboard =() => {
  return (
    <div className='flex flex-col space-y-6 py-12 px-10'>
        <h2>Dashboard</h2>

        <div className='flex space-x-8'>
            <div className='w-2/5 h-[150px] border rounded flex flex-col justify-center p-4  text-gray-600'>
                <span>Baha Catherine Maigida</span>
                <span className='text-gray-500'>Your Balance: Rs 200000</span>
            </div>

            <div className='w-2/5 h-[150px] border  rounded flex flex-col justify-center p-4  text-gray-600'>
                <span>Baha Catherine Maigida</span>
                <span className='text-gray-500'>Your Expenses: Rs 400000</span>
            </div>
        </div>

        <div className='flex space-x-8 w-4/5 flex-col'>
           <h2>Expenses Chart</h2>
           <Chart className="w-4/5" />
        </div>

        <div className='flex space-x-8'>
            <div className='w-2/5 h-[150px] border rounded flex flex-col justify-center p-4  text-gray-600'>
                <span>Your Activity</span>
                <li className='mt-4'>You sent Rs 200000 to your mother</li>
            </div>

            <div className='w-2/5 h-[150px] border  rounded flex flex-col justify-center p-4  text-gray-600'>
                <span>Pending Bills</span>
                <li className='mt-4'>Broadband Bills: Rs 400000</li>
            </div>
        </div>
     
    </div>
  )
}

export default Dashboard
