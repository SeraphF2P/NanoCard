import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Master = lazy(() => import("./layout/master"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Master />}>
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
