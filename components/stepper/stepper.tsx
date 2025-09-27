import { useEffect, useRef } from "react";
import { steps } from "./steps";
import Stepperbar from "./stepperbar";
interface StepperProps {
	Step: number
}

export default function Stepper({ Step }: StepperProps) {
	/*TODO: Replace this with the actual Stepper implementation*/
	const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		if (stepRefs.current[Step]) {
			stepRefs.current[Step]?.scrollIntoView({
				behavior: "smooth",
				inline: "center",
				block: "nearest",
			});
		}
	}, [Step]);
	return (
		<div

			className={
				"h-[100px] border border-dashed border-gray-400 rounded flex justify-center items-center max-w-screen-lg"
			}
		>		<div className={`flex overflow-x-auto justify-start items-center sm:mx-10`}>
				{steps.map((step, index) => (
					<div
						key={index}
						ref={(el) => (stepRefs.current[index] = el)}
					>
						<Stepperbar key={index} Step={Step} index={index} step={step} />

					</div>

				))}

			</div>





		</div>
	);
}