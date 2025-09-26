import { useCallback, useState } from "react";
import { steps } from "../components/stepper/steps";
export default function useStepper() {
	const [currentStep, setCurrentStep] = useState<number>(0);
	const handleNextStep=useCallback(()=> {
		if(currentStep<steps.length-1){
			setCurrentStep((prev) => {
			return prev + 1;
		});
		}else{
			return currentStep
		}
		
	},[])
	return { currentStep, handleNextStep };
}
