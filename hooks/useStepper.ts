import { useCallback, useState } from "react";
import { steps } from "../components/stepper/steps";
export default function useStepper() {
	const [currentStep, setCurrentStep] = useState<number>(0);
	//console.log(currentStep,steps.length-1,"USe")
	const handleNextStep=useCallback(()=> {
		// commenting the Check For Step Count because the Button
		// removed at final step so user can not add more steps
		//if(steps.length-1>currentStep){
			setCurrentStep((prev) => {
			return prev + 1;
		}
	);
		 }
		//else{
		// 	return currentStep
		// }
		
	,[])
	return { currentStep, handleNextStep };
}
