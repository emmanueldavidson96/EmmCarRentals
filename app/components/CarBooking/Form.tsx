import React from 'react'

function Form() {
  return (
    <div>
        <div className='flex flex-col w-full mb-5'>
            <label className='text-gray-400'>PickUp Location</label>
            <select className='select select-bordered w-full max-w-lg'>
                <option disabled selected>PickUp Location</option>
                <option>Han Solo</option>
                <option>Greedo</option>
            </select>
        </div>
        <div className='flex flex-col gap-5 mb-5'>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>PickUp Date</label>
                <input className='input input-bordered w-full max-w-lg' placeholder='Type Here' type='date'/>
            </div>
            <div className='flex flex-col w-full'>
                <label className='text-gray-400'>Drop Off Date</label>
                <input className='input input-bordered w-full max-w-lg' placeholder='Type Here' type='date'/>
            </div>
        </div>
        <div className='flex gap-5'>
            <div className='flex flex-col w-full mb-5'>
                <label className='text-gray-400'>PickUp Time</label>
                <input type="time" placeholder='Type Here' className='input input-bordered w-full max-w-lg'/>
            </div>
            <div className='flex flex-col w-full mb-5'>
                <label className='text-gray-400'>DropOff Time</label>
                <input type="time" placeholder='Type Here' className='input input-bordered w-full max-w-lg'/>
            </div>
        </div>

        <div className='flex flex-col w-full mb-5'>
            <label className='text-gray-400'>Contact Number</label>
            <input type="text" placeholder='Type Here' className='input input-bordered w-full max-w-lg'/>
        </div>
    </div>
  )
}

export default Form