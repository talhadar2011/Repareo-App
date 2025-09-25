import { useEffect } from "react";

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
			<code className={"text-2xl"}>{"<Stepper />"}</code>
				{Step}
		</div>
	);
}
