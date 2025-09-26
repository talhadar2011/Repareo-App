import type { ReactNode } from "react";

export default function ButtonWrapper({ children }: { children: ReactNode }) {
	console.log("Button Wrapper Render")
	return (
		<div className={"lg:pt-12"}>
			<div
				className={
					"hidden lg:block rounded border border-dashed border-gray-400 h-[640px]"
				}
			/>
			{children}
		</div>
	);
}
