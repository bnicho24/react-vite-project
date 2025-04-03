import UserList from '@/components/utility/UserList/UserList'
import React from 'react'

const UserToDoList = () => {
  return (
    <>
    <div className='mb-3'>
            <h1 className="text-2xl font-semibold text-dark-700 ">
                User ToDo List
            </h1>
        </div>
        <div className="max-w-xxl p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                <UserList />
        </div>
    </>
  )
}

export default UserToDoList