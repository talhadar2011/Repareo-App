import { useEffect } from "react";
import { steps } from "./steps";
import Stepperbar from "./stepperbar";
interface StepperProps {
	Step:number
}

export default function Stepper({Step}:StepperProps) {
	/*TODO: Replace this with the actual Stepper implementation*/
	useEffect(()=>{
	},[Step])
	return (
		<div
			className={
				"h-[100px] border border-dashed border-gray-400 rounded flex justify-center items-center max-w-screen-lg"
			}
		>
			
			<div className="flex mx-10  sm:overflow-x-auto justify-start items-center">
				{steps.map((step,index)=>(
					<Stepperbar Step={Step} index={index} step={step}/>
				
			))}	

    </div>

			
				

				
		</div>
	);
}
