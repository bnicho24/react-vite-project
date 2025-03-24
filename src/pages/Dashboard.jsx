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

function Dashboard() {
  return (
    <>
   
    <div className='mb-3'>
    <h1 className="text-2xl font-semibold text-dark-700 ">
        Welcome to Dashboard
      </h1>
    </div>
    <div className='flex flex-wrap gap-4'>
    <Card className='w-64'>
        <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
            <Profile />
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>
    <Card className='w-64'>
        <CardHeader>
            <CardTitle>Use State</CardTitle>
            <CardDescription>Counter</CardDescription>
        </CardHeader>
        <CardContent>
            <Counter />
        </CardContent>
    </Card>
    <Card className='w-72'>
        <CardHeader>
            <CardTitle>Use State</CardTitle>
            <CardDescription>Character Slider</CardDescription>
        </CardHeader>
        <CardContent>
            <CharacterSlider totalPoints={15} />
        </CardContent>
    </Card>
    <Card className='w-[500px]'>
        <CardHeader>
            <CardTitle>Use Effect</CardTitle>
            <CardDescription>Countries</CardDescription>
        </CardHeader>
        <CardContent>
            <Countries />
        </CardContent>
    </Card>
    <Card className='w-72'>
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