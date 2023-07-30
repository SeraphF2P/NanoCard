import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

function App() {
	const Master = lazy(() => import("./layout/master"));
	const Home = lazy(() => import("./pages/home"));
	const About = lazy(() => import("./pages/about"));
	const Contact = lazy(() => import("./pages/contact"));
	const NotFound = lazy(() => import("./pages/NotFound"));
	return (
		<BrowserRouter>
			<Suspense fallback={<>loading</>}>
				<Routes>
					<Route element={<Master />}>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/*" element={<NotFound />} />
					</Route>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
