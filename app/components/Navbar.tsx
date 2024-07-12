import React from 'react'
import { UserButton, SignedIn, SignedOut, SignInButton} from "@clerk/nextjs";

function Navbar() {
  return (
    <div className='flex items-center justify-between p-5 px-20 shadow-sm border-b-[1px] '>
        <h1 className='text-2xl font-semibold  cursor-pointer'><span className='text-green-600'>EMM</span><span className='text-green-600 font-black'>CARS</span></h1>
        <div className='hidden md:flex gap-5'>
            <h2 className='hover:bg-green-500 p-3 rounded-full hover:text-white cursor-pointer text-sm font-medium text-green-600'>Home</h2>
            <h2 className='hover:bg-green-500 p-3 rounded-full hover:text-white cursor-pointer text-sm font-medium text-green-600'>History</h2>
            <h2 className='hover:bg-green-500 p-3 rounded-full hover:text-white cursor-pointer text-sm font-medium text-green-600'>Contact</h2>
        </div>
        <SignedIn>
            <UserButton />
        </SignedIn>
        <SignedOut>
            <SignInButton>
                Sign In
            </SignInButton> 
        </SignedOut>
    </div>
  )
}

export default Navbar