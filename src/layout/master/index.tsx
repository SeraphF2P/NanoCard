import { FC, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Btn from "../../components/Btn";
import Logo from "../../components/Logo";
import BurgerMenuBtn from "./BurgerBtn";
import { useScrollLock } from "@mantine/hooks";

const Master: FC = () => {
	const [open, setOpen] = useState(false);
	useScrollLock(open);
	return (
		<>
			<header className=" bg-slate-50 fixed top-0 w-full  shadow">
				<nav className=" container sticky top-0 flex  w-full flex-col items-center justify-center  mid:flex-row">
					<div className=" flex h-20 w-full items-center justify-between">
						<Logo />
						<Btn
							onClick={() => setOpen((prev) => !prev)}
							className="  mid:hidden"
						>
							<BurgerMenuBtn className="  relative h-8 w-8" animate={open} />
						</Btn>
					</div>
					<div
						className={`${
							open
								? " grid-rows-[1fr]"
								: " grid-rows-[0fr] mid:grid-rows-[1fr] "
						} grid w-full overflow-hidden  transition-[grid-template-rows] duration-300 `}
					>
						<ul
							className={`
						flex min-h-0   w-full  flex-col items-center  justify-center gap-4  capitalize text-gray-400 transition-all  duration-300  ease-linear mid:flex-row mid:justify-end`}
						>
							<li className="pt-4 mid:p-0">
								<Link to="/">home</Link>
							</li>
							<li className=" ">
								<Link to="/about">about</Link>
							</li>
							<li className="pb-8 mid:p-0">
								<Link to="/contact">contact</Link>
							</li>
						</ul>
					</div>
				</nav>
				{open && <div className=" fixed inset-0 -z-10  bg-black/90"></div>}
			</header>
			<Outlet />
		</>
	);
};

export default Master;
