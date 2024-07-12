import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='pt-[20%]'>
            <h2 className='text-[40px] md:text-[60px] font-extrabold'>Premium Car Rental in Your Area</h2>
            <h2>Book the Selected car effortlessly, Pay for driving only, Book the Car Now!</h2>
            <button className='p-2 mt-5 bg-green-500 text-white rounded-full hover:scale-105 transition-all px-4'>Explore Cars</button>
        </div>
        <div>
            <Image src="/assets/black-and-grey-sports-car-for-luxury.webp" width={400} height={500} alt='' className='w-full object-contain  '/>
        </div>

    </div>
  )
}
