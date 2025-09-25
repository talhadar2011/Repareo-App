import { useEffect } from "react";
import { steps } from "./steps";
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
				"h-[100px] border border-dashed border-gray-200 rounded flex justify-center items-center"
			}
		>
			<code className={"text-2xl"}>{steps.map((st,index)=>(st.title))}</code>

				{Step}
		</div>
	);
}
