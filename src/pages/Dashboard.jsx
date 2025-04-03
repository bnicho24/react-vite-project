import React from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Counter from '@/components/utility/Counter/Counter'
  import CharacterSlider from '@/components/utility/CharacterSlider/ChaeacterSlider'
  import Countries from '@/components/utility/Countries/Countries'
  import Memes from '@/components/utility/Memes/Memes'
import Profile from './Profile'
import Rating from './RatingPage'
import { Button } from '@/components/ui/button'
import { Navigate, useNavigate } from 'react-router-dom'
import SearchBox from '@/components/utility/SearchBox/SearchBox'

function Dashboard() {
    const navigate = useNavigate()
    const handleRating =() => {
        // return <Navigate to="/main/rating" replace />
        // console.log('onclick')
        navigate('/main/rating');
    }
    const handleToDoList =() => {
        navigate('/main/todolist');
    }

  return (
    <>
   
    <div className='mb-3'>
    <h1 className="text-2xl font-semibold text-dark-700 ">
        Welcome to Dashboard
      </h1>
    </div>
    <div className='flex flex-wrap gap-4'>
    <Card className='min-w-64 flex-1 h-auto'>
        <CardHeader>
            <CardTitle>Rating </CardTitle>
            <CardDescription>Rating Summary App</CardDescription>
        </CardHeader>
        <CardContent>
            <p className='pb-3'>Click here to see the rating app <span className="full-width-stars"></span></p>
            
            <Button className="w-full cursor-pointer" type="submit" onClick={handleRating}>Rating</Button>
        </CardContent>
    </Card>
    <Card className='min-w-64 flex-1 h-auto'>
        <CardHeader>
            <CardTitle>To Do List </CardTitle>
            <CardDescription>User list component</CardDescription>
        </CardHeader>
        <CardContent>
            <p className='pb-3'>Click here to see the user list To do's</p>
            
            <Button className="w-full cursor-pointer" type="submit" onClick={handleToDoList}>To Do List</Button>
        </CardContent>
    </Card>
    
    <Card className='min-w-64 flex-1 h-auto'>
        <CardHeader>
            <CardTitle>Use State</CardTitle>
            <CardDescription>Counter</CardDescription>
        </CardHeader>
        <CardContent>
            <Counter />
        </CardContent>
    </Card>
    <Card className='min-w-[400px] flex-1 h-auto'>
        <CardHeader>
            <CardTitle>Use Effect</CardTitle>
            <CardDescription>Countries</CardDescription>
        </CardHeader>
        <CardContent>
            <SearchBox />
            <Countries />
        </CardContent>
    </Card>
    
    <Card className='w-[300px] h-auto'>
        <CardHeader>
            <CardTitle>Use State</CardTitle>
            <CardDescription>Character Slider</CardDescription>
        </CardHeader>
        <CardContent>
            <CharacterSlider totalPoints={15} />
        </CardContent>
    </Card>
    <Card className='min-w-[200px] flex-1 h-auto'>
        <CardHeader>
            <CardTitle>Use Effect</CardTitle>
            <CardDescription>Meme Image</CardDescription>
        </CardHeader>
        <CardContent>
           <Memes />
        </CardContent>
    </Card>
    
    </div>

    </>
  )
}

export default Dashboard