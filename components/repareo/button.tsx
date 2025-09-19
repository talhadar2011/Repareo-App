import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}

export default function Button({ onClick, children }: ButtonProps) {
	return (
		<button
			onClick={onClick}
			type={"button"}
			className={
				"bg-blue-600 hover:opacity-90 shadow-sm text-white py-3 px-6 w-full rounded-lg lg:mt-8 mt-6"
			}
		>
			{children}
		</button>
	);
}
