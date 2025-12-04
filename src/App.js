import Menu from "./Components/Menu.js"
import Nominations from "./Components/Nominations.js"
import Slayking from "./Components/Slayking.js"
import Slayquin from "./Components/Slayquin.js"
import Reg from "./Components/Regi.js"
import Telegram from "./Components/Telegram.js"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";

export default function App() {

	const [visibleKing, setvisibleKing] = useState(false);
	const [visibleQuin, setvisibleQuin] = useState(false);

	useEffect(() => {
		if (visibleKing || visibleQuin) {
		document.body.classList.add("modal-open");
		} else {
		document.body.classList.remove("modal-open");
		}
	}, [visibleKing, visibleQuin]);


	return (
		<Router>
			<div>
				<Menu/>
				<Slayking visibleKing={visibleKing} setvisibleKing={setvisibleKing}/>
				<Slayquin visibleQuin={visibleQuin} setvisibleQuin={setvisibleQuin}/>
				<Nominations setvisibleKing={setvisibleKing} setvisibleQuin={setvisibleQuin}/>
				<Reg/>
				<Telegram/>
			</div>
		</Router>
	);
}