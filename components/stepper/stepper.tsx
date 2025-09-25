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
				<div className="flex flex-col items-center justify-center absolute">
					<div className="bg-gray-500 p-2 w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-white">
					1
					</div>
					<div>step1</div>
				</div>

				<div className="flex-1 h-1 w-10 bg-black  top-5 relative -z-10"></div>

				<div className="flex flex-col items-center justify-center absloute">
					<div className="bg-gray-300 w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-white">
					2
					</div>
					<div>step1</div>
				</div>

				

    </div>

			
				

				
		</div>
	);
}
