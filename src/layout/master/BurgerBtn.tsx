import { FC } from "react";

interface BurgerMenuBtnProps {
	animate: boolean;
	className?: string;
}

const BurgerMenuBtn: FC<BurgerMenuBtnProps> = ({ animate, className }) => {
	return (
		<>
			<div
				className={` transition-transform duration-1000 ${
					animate && "rotate-90"
				} ${className}`}
			>
				<span
					className={`${
						animate
							? "translate-y-2 rotate-45 scale-x-100"
							: "translate-y-0 rotate-0 scale-x-100"
					}  absolute left-0 top-0 -z-10  h-0.5 w-full origin-center rounded-sm bg-gray-400 transition-[width,transform,background] duration-1000`}
				/>
				<span
					className={`${
						animate
							? "translate-y-2 rotate-0 scale-x-0"
							: "translate-y-[12.8px] scale-x-100"
					}  absolute left-0 top-0 -z-10  h-0.5 w-full origin-center rounded-sm bg-gray-400 transition-[width,transform,background] duration-1000 `}
				/>
				<span
					className={`${
						animate
							? "translate-y-2 -rotate-45 scale-x-100"
							: "translate-y-[25.6px]"
					}  absolute left-0 top-0 -z-10  h-0.5 w-full origin-center rounded-sm bg-gray-400 transition-[width,transform,background] duration-1000`}
				/>
			</div>

			<span className=" sr-only">Menu</span>
		</>
	);
};

export default BurgerMenuBtn;
