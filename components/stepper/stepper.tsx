import { useEffect } from "react";
import { steps } from "./steps";
import Stepperbar from "./stepperbar";
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
				"h-[100px] border border-dashed border-gray-400 rounded flex justify-center items-center "
			}
		>
			
			<div className="flex  mx-10 ">
				{steps.map((st,index)=>(
					<Stepperbar Step={Step} index={index} st={st}/>
				
			))}	

    </div>

			
				

				
		</div>
	);
}
