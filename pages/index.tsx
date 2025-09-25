import Button from "../components/repareo/button";
import ButtonWrapper from "../components/repareo/buttonWrapper";
import Header from "../components/repareo/header";
import MainWrapper from "../components/repareo/mainWrapper";
import StepperWrapper from "../components/repareo/stepperWrapper";
import Stepper from "../components/stepper/stepper";
import { steps } from "../components/stepper/steps";
import useStepper from "../hooks/useStepper";

export default function Home() {
	const { currentStep, handleNextStep } = useStepper();
	console.log(currentStep,steps.length,"COM")
	return (
		<>
			<Header />
			<MainWrapper>
				<StepperWrapper>
					{/*TODO: Make sure the Stepper handles clicks on the button*/}
					<Stepper Step={currentStep}/>
				</StepperWrapper>
				{
					currentStep+1!==steps.length&&
					<ButtonWrapper>
					<Button onClick={handleNextStep}>Next</Button>
				</ButtonWrapper>
				}
				
			</MainWrapper>
		</>
	);
}
