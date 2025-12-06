// App.js

import Menu from "./Components/Menu.js"
import Nominations from "./Components/Nominations.js"
import Slayking from "./Components/Slayking.js"
import Slayquin from "./Components/Slayquin.js"
import Discord from "./Components/Discord.js"
import Regi from "./Components/Regi.js"
import Telegram from "./Components/Telegram.js"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function App() {

	const [visibleKing, setvisibleKing] = useState(false);
	const [visibleQuin, setvisibleQuin] = useState(false);
	const [visibleDiscord, setvisibleDiscord] = useState(false);

	const [visibleTelegram, setvisibleTelegram] = useState(false);

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
	console.log("Ответ /vote/my:", data);

	if (Array.isArray(data)) {
		const votesMap = {};
		data.forEach(v => {
		votesMap[v.category] = v.streamer_name;
		});
		setMyVotes(votesMap);
	} else {
		// если ошибка
		console.warn("Ошибка при получении голосов:", data.message);
		setMyVotes({});
	}
	};


		useEffect(() => {
	if (localStorage.getItem("token")) {
		fetchMyVotes();
	}
	}, []);

		useEffect(() => {
	const avatarUrl = localStorage.getItem("tgAvatar");
	if (avatarUrl) {
		const avatar = document.getElementById("tgAvatar");
		if (avatar) {
		avatar.src = avatarUrl;
		}
	}
	}, []);




	return (
		<Router>
			<div>
				<Menu/>
				<Slayking visibleKing={visibleKing} setvisibleKing={setvisibleKing} onVote={fetchMyVotes} visibleTelegram={visibleTelegram} setvisibleTelegram={setvisibleTelegram}/>
				<Slayquin visibleQuin={visibleQuin} setvisibleQuin={setvisibleQuin} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram}/>
				<Discord visibleDiscord={visibleDiscord} setvisibleDiscord={setvisibleDiscord} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram}/>

				<Nominations
				setvisibleKing={setvisibleKing}
				setvisibleQuin={setvisibleQuin}
				setvisibleDiscord={setvisibleDiscord}
				
				myVotes={myVotes} setMyVotes={setMyVotes}/>
				<Regi onLogin={fetchMyVotes}/>
				{visibleTelegram && <Telegram onLogin={fetchMyVotes} setvisibleTelegram={setvisibleTelegram} />}
			</div>
		</Router>
	);
}