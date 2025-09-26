import React from 'react'
import { steps } from './steps'
interface PropsType{
    Step:number,
    index:number,
    step:{
        title:string
    }
}
export default function stepperbar({Step,index,step}:PropsType) {
  return (
<>				<div className='flow flow-col'>
					<div key={index}  className={`flex  items-center justify-center `}>

					<div className={`${index<=Step?"bg-blue-500 transition ease-in duration-300 text-white":"bg-gray-300"}  w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center font-extrabold `}>
					{index+1}
					</div>
					{(index+1===steps.length)?<div className='flex-1'></div>:<div className={`flex-1 h-1 top-15 w-10 md:w-24 lg:w-30  -z-10 ${index<Step?"bg-blue-500 transition ease-in duration-200 ":"bg-gray-300"}`}></div>}

				</div>
				<div className={`${index<=Step?"font-bold transition ease-in":"font-normal"}`}>
				{step.title}

				</div>
				</div>
				

				</>  )
}
