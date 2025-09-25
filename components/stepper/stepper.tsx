import { useEffect } from "react";
import { steps } from "./steps";
import steperbar from "./steperbar";
interface StepperProps {
	Step:number
}

export default function Stepper({Step}:StepperProps) {
	/*TODO: Replace this with the actual Stepper implementation*/
	useEffect(()=>{
		console.log(Step,"StepperComponete USeeffect")
	},[Step])
	return (
		<div
			className={
				"h-[100px] border border-dashed border-gray-200 rounded flex justify-center items-center "
			}
		>
			
			<div className="flex w-full mx-10">
				{steps.map((st,index)=>(
					
				<>
				<div className={`flex flex-col items-center justify-center `}>
					<div className={`${index<=Step?"bg-blue-500":"bg-gray-300"} p-2 w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-white`}>
					{index+1}
					</div>
					<div>{st.title}</div>
				</div>
				{(index+1===steps.length)?<></>:<div className={`flex-1 h-1 w-10  top-5 relative -z-10 ${index<Step?"bg-blue-500":"bg-gray-300"}`}></div>
}
				
				</>
			))}	

    </div>

			
				

				
		</div>
	);
}
