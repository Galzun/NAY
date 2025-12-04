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

	const [visible, setVisible] = useState(false);

	useEffect(() => {
	if (visible) {
    document.body.classList.add("modal-open");
	} else {
    document.body.classList.remove("modal-open");
	}
}, [visible]);


	return (
		<Router>
			<div>
				<Menu/>
				<Slayking visible={visible} setVisible={setVisible}/>
				<Slayquin visible={visible} setVisible={setVisible}/>
				<Nominations setVisible={setVisible}/>
				<Reg/>
				<Telegram/>
			</div>
		</Router>
	);
}