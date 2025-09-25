import React from 'react'

export default function steperbar() {
  return (
    <div className='flex items-center justify-center'>
        <div className='flex items-start gap-6'>
            <div className='flex flex-col items-center'>
          <div className='w-10 h-10 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold'>
            1
          </div>
          <span className='mt-2 text-sm text-gray-300 font-medium'>
            Fahrzeug
          </span>
        </div>

        <div className='flex-1 h-0.5 bg-gray-400'></div>
        </div>

    </div>
  )
}
