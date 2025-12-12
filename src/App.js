// App.js

import Menu from "./Components/Menu.js"
import Nominations from "./Components/Nominations.js"
import Slayking from "./Components/Slayking.js"
import Slayquin from "./Components/Slayquin.js"
import Discord from "./Components/Discord.js"
import Streamer from "./Components/Streamer.js"
import Bloger from "./Components/Bloger.js"
import Moder from "./Components/Moder.js"
import Minecraft from "./Components/Minecraft.js"
import Lor from "./Components/Lor.js"
import Transformation from "./Components/Transformation.js"
import Zavoz from "./Components/Zavoz.js"
import Soul from "./Components/Soul.js"
import Ship from "./Components/Ship.js"
import Ragebait from "./Components/Ragebait.js"
import Podliza from "./Components/Podliza.js"
import Regi from "./Components/Regi.js"
import Telegram from "./Components/Telegram.js"
import Footer from "./Components/Footer.js"

import streamerImages from "../src/Components/Static/streamerImages.js"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from "react";

import axios from "axios";

export default function App({background, setBackground}) {

	const [visibleKing, setvisibleKing] = useState(false);
	const [visibleQuin, setvisibleQuin] = useState(false);
	const [visibleDiscord, setvisibleDiscord] = useState(false);
	const [visibleStreamer, setvisibleStreamer] = useState(false);
	const [visibleBloger, setvisibleBloger] = useState(false);
	const [visibleModer, setvisibleModer] = useState(false);
	const [visibleMinecraft, setvisibleMinecraft] = useState(false);
	const [visibleLor, setvisibleLor] = useState(false);
	const [visibleTransformation, setvisibleTransformation] = useState(false);
	const [visibleZavoz, setvisibleZavoz] = useState(false);
	const [visibleSoul, setvisibleSoul] = useState(false);
	const [visibleShip, setvisibleShip] = useState(false);
	const [visibleRagebait, setvisibleRagebait] = useState(false);
	const [visiblePodliza, setvisiblePodliza] = useState(false);

	const [visibleTelegram, setvisibleTelegram] = useState(false);

	useEffect(() => {
		if (visibleKing ||
			visibleQuin ||
			visibleDiscord ||
			visibleStreamer ||
			visibleBloger ||
			visibleModer ||
			visibleMinecraft ||
			visibleLor ||
			visibleTransformation ||
			visibleZavoz ||
			visibleSoul ||
			visibleShip ||
			visibleRagebait ||
			visiblePodliza) {
		document.body.classList.add("modal-open");
		} else {
		document.body.classList.remove("modal-open");
		}
	}, [visibleKing,
		visibleQuin,
		visibleDiscord,
		visibleStreamer,
		visibleBloger,
		visibleModer,
		visibleMinecraft,
		visibleLor,
		visibleTransformation,
		visibleZavoz,
		visibleSoul,
		visibleShip,
		visibleRagebait,
		visiblePodliza]);

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


	const [achievements, setAchievements] = useState(0)
	const [transformationIndex, setTransformationIndex] = useState(0);
	const [hasAchievement20, setHasAchievement20] = useState(false);

const fetchAchievements = async () => {
    const res = await fetch("https://galzun-nay-c390.twc1.net/user/achievements", {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
    const data = await res.json();
    console.log("Ачивки:", data);

    if (data.achievements) {
        const unlocked = Object.keys(data.achievements).filter(k => data.achievements[k]);
        setAchievements(unlocked.length);
        if (data.achievements["achievement20"]) {
            setHasAchievement20(true);
        }
    }
};

useEffect(() => {
    if (localStorage.getItem("token")) {
        fetchAchievements();
    }
}, []);



	return (
		<Router>
			<div>
				<Menu background={background} setBackground={setBackground} achievements={achievements}/>
				<Slayking visibleKing={visibleKing} setvisibleKing={setvisibleKing} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram}/>
				<Slayquin visibleQuin={visibleQuin} setvisibleQuin={setvisibleQuin} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram}/>
				<Discord visibleDiscord={visibleDiscord} setvisibleDiscord={setvisibleDiscord} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram}/>
				<Streamer visibleStreamer={visibleStreamer} setvisibleStreamer={setvisibleStreamer} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram}/>
				<Bloger visibleBloger={visibleBloger} setvisibleBloger={setvisibleBloger} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram}/>
				<Moder visibleModer={visibleModer} setvisibleModer={setvisibleModer} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram}/>
				<Minecraft visibleMinecraft={visibleMinecraft} setvisibleMinecraft={setvisibleMinecraft} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram}/>
				<Lor visibleLor={visibleLor} setvisibleLor={setvisibleLor} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram}/>
				<Transformation visibleTransformation={visibleTransformation} setvisibleTransformation={setvisibleTransformation} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram} transformationIndex={transformationIndex} setTransformationIndex={setTransformationIndex} hasAchievement20={hasAchievement20} setHasAchievement20={setHasAchievement20} achievements={achievements} setAchievements={setAchievements}/>
				<Zavoz visibleZavoz={visibleZavoz} setvisibleZavoz={setvisibleZavoz} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram}/>
				<Soul visibleSoul={visibleSoul} setvisibleSoul={setvisibleSoul} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram}/>
				<Ship visibleShip={visibleShip} setvisibleShip={setvisibleShip} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram}/>
				<Ragebait visibleRagebait={visibleRagebait} setvisibleRagebait={setvisibleRagebait} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram}/>
				<Podliza visiblePodliza={visiblePodliza} setvisiblePodliza={setvisiblePodliza} onVote={fetchMyVotes} setvisibleTelegram={setvisibleTelegram}/>


				<Nominations
				setvisibleKing={setvisibleKing}
				setvisibleQuin={setvisibleQuin}
				setvisibleDiscord={setvisibleDiscord}
				setvisibleStreamer={setvisibleStreamer}
				setvisibleBloger={setvisibleBloger}
				setvisibleModer={setvisibleModer}
				setvisibleMinecraft={setvisibleMinecraft}
				setvisibleLor={setvisibleLor}
				setvisibleTransformation={setvisibleTransformation}
				setvisibleZavoz={setvisibleZavoz}
				setvisibleSoul={setvisibleSoul}
				setvisibleShip={setvisibleShip}
				setvisibleRagebait={setvisibleRagebait}
				setvisiblePodliza={setvisiblePodliza}

				achievements={achievements} setAchievements={setAchievements}
				transformationIndex={transformationIndex} setTransformationIndex={setTransformationIndex}
				hasAchievement20={hasAchievement20} setHasAchievement20={setHasAchievement20}

				myVotes={myVotes} setMyVotes={setMyVotes}/>
				{/* <Regi onLogin={fetchMyVotes}/> */}
				{visibleTelegram && <Telegram onLogin={fetchMyVotes} setvisibleTelegram={setvisibleTelegram} />}
				<Footer/>
			</div>
		</Router>
	);
}