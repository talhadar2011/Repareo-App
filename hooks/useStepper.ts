import { useState } from "react";
import { steps } from "../components/stepper/steps";
export default function useStepper() {
	const [currentStep, setCurrentStep] = useState<number>(0);
	function handleNextStep() {
//		console.log(steps.length)
		if(currentStep<steps.length-1){
			setCurrentStep((prev) => {
			return prev + 1;
		});
		}else{
			return currentStep
		}
		//console.log(currentStep,"currentsteps")
		
	}
	return { currentStep, handleNextStep };
}
