import { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC = () => {
	return (
		<div className="  relative h-auto w-auto shrink-0 overflow-visible whitespace-pre bg-amber-300 text-left text-3xl font-semibold not-italic leading-[100%] tracking-[-0.5px] text-black">
			<Link className=" font-bold" to="/">
				Nano
				<span className=" font-light">Card</span>
			</Link>
		</div>
	);
};

export default Logo;
