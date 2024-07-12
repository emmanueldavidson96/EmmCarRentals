import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaGasPump } from 'react-icons/fa6'
import { MdAirlineSeatReclineNormal } from 'react-icons/md'
import { PiSteeringWheelFill } from 'react-icons/pi'

export default function CarCard(props:any) {
    const [car, setCar] = useState<any>(props.car)

    useEffect(() => {
        if(props.car){
            setCar(props.car)
        }
    }, [props.car])
  return car && (
    <div className='group bg-gray-50 p-2 sm:p- hover:bg-white hover:border-[1px] cursor-pointer duration-100 border-blue-500 rounded-lg'>
        <h2 className='text-[20px] font-medium mb-2'>{car?.name}</h2>
        <h2 className='text-[28px] font-bold mb-2'>
            <span className='text-[12px] font-light'>$ </span>
            {car.price}
            <span className='text-[12px] font-light'> /day</span>
        </h2>
        <Image 
            alt={car.name}
            width={220}
            height={200}
            className='w-[250px] h-[150px] mb-3 object-contain'
            src={car.image?.url}
        />
        <div className='flex justify-around group-hover:hidden'>
            <div className='text-center text-gray-500'>
                <PiSteeringWheelFill className='w-full text-[22px] mb-2'/>
                <h2 className='line-clamp-5 text-[14px] font-light'>{car.carType}</h2>
            </div>
            <div className='text-center text-gray-500'>
                <MdAirlineSeatReclineNormal className='w-full text-[22px] mb-2' />
                <h2 className='line-clamp-5 text-[14px] font-light'>{car.seat} Seat </h2>
            </div>
            <div className='text-center text-gray-500'>
                <FaGasPump className='w-full text-[22px] mb-2'/>
                <h2 className='line-clamp-5 text-[14px] font-light'>{car.carAvg} MPG</h2>
            </div>
        </div>
        <button className='hidden group-hover:flex bg-gradient-to-r from-blue-400 p-2 rounded-lg text-white w-full px-5 justify-between '>Rent Now
            <span className='bg-blue-400 p-1 rounded-md'>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-4 h-4 text-white'>
                    <path fillRule='evenodd' d="M12.97 3.97a.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-" >
                    </path>
                </svg>
            </span>
        </button>
    </div>
  )
}
