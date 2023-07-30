import { FC } from "react";
import Btn from "../../components/Btn";

const index: FC = () => {
	return (
		<>
			<section className=" flex h-screen flex-col items-center justify-around   bg-red-400 ">
				<h1>Spend your crypto right from your personal wallet</h1>
				<p>
					Card designed for all your needs to help you manage your spendings and
					reinvest money.
				</p>
				<Btn variant="fill">get this template</Btn>
			</section>
		</>
	);
};

export default index;
