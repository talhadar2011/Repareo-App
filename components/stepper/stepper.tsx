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
				"h-[100px] border border-dashed border-gray-400 rounded flex justify-center items-center max-w-screen-2xl"
			}
		>		<div className={`flex overflow-x-auto justify-start items-center sm:mx-10`}>
{steps.map((step,index)=>(
					<Stepperbar Step={Step} index={index} step={step}/>
				
			))}	

    </div>

			
				

				
		</div>
	);
}