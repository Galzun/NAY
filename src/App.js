// App.js

import Menu from "./Components/Menu.js"
import Nominations from "./Components/Nominations.js"
import Slayking from "./Components/Slayking.js"
import Slayquin from "./Components/Slayquin.js"
import Regi from "./Components/Regi.js"
import Telegram from "./Components/Telegram.js"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from "react";

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

	const [myVotes, setMyVotes] = useState({});

	const fetchMyVotes = async () => {
		const res = await fetch("https://galzun-nay-c390.twc1.net/vote/my", {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
		});
		const data = await res.json();
		const votesMap = {};
		data.forEach(v => {
		votesMap[v.category] = v.streamer_name;
		});
		setMyVotes(votesMap);
	};

		useEffect(() => {
	if (localStorage.getItem("token")) {
		fetchMyVotes();
	}
	}, []);



	return (
		<Router>
			<div>
				<Menu/>
				<Slayking visibleKing={visibleKing} setvisibleKing={setvisibleKing} onVote={fetchMyVotes}/>
				<Slayquin visibleQuin={visibleQuin} setvisibleQuin={setvisibleQuin} onVote={fetchMyVotes}/>
				<Nominations setvisibleKing={setvisibleKing} setvisibleQuin={setvisibleQuin} myVotes={myVotes} setMyVotes={setMyVotes}/>
				<Regi onLogin={fetchMyVotes}/>
				<Telegram onLogin={fetchMyVotes}/>
			</div>
		</Router>
	);
}