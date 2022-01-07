import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./components/signup";
import Login from "./components/login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<SignUp />} />
				<Route path="/login" element={<Login />} />
				{/* <Route path="/" element={<Issues />} />
		<Route path="/issues/:id" element={<SingleIssue />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
