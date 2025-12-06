// Nominations.js

import "./Style/Nominations.css"
import streamerImages from "./Static/streamerImages"
import { useState, useEffect } from "react";

export default function Nominations({setvisibleKing, setvisibleQuin, setvisibleDiscord, myVotes, setMyVotes}) {

    useEffect(() => {
        const fetchVotes = async () => {
        const res = await fetch("https://galzun-nay-c390.twc1.net/vote/my", {
            headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const data = await res.json();
        // Преобразуем массив в объект { category: streamer }
        const votesMap = {};
            data.forEach(v => {
            votesMap[v.category] = v.streamer_name; // только имя
            });
        setMyVotes(votesMap);
        };
        fetchVotes();
    }, []);

    return (
                <div className='nominations-wrapper'>
                    <div className='container'>
                        <div className='nominations'>
                            <div className="nominations-king">
                                <ul className="nominations-card-king">
                                    <li className="nominations-card-half">
                                    {myVotes?.SlayKing &&
                                    <li className="nominations-card_img-king-activ">
                                        <img src={streamerImages[myVotes?.SlayKing]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.SlayKing &&
                                    <li className="nominations-card_img-king">
                                        <img src={streamerImages["SlayKing"]} alt="avatar"/>
                                    </li>
                                    }
                                    </li>
                                    <li>
                                    <li className="nominations-card_nomination">
                                        SlayKing
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.SlayKing || "—"}
                                    </li>
                                    <li onClick={() => setvisibleKing(true)} className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                                <ul className="nominations-card-king">
                                    <li className="nominations-card-half">
                                    {myVotes?.SlayQuin &&
                                    <li className="nominations-card_img-king-activ">
                                        <img src={streamerImages[myVotes?.SlayQuin]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.SlayQuin &&
                                    <li className="nominations-card_img-king">
                                        <img src={streamerImages["SlayQuin"]} alt="avatar"/>
                                    </li>
                                    }
                                    </li>
                                    <li>
                                    <li className="nominations-card_nomination">
                                        SlayQuin
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.SlayQuin || "—"}
                                    </li>
                                    <li onClick={() => setvisibleQuin(true)} className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                            </div>
                            <div className="nominations-nomination">
                                <ul className="nominations-card">
                                    <li className="nominations-card-half">
                                    {myVotes?.Discord &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Discord]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Discord &&
                                    <li className="nominations-card_img">
                                        <img src={streamerImages["Discord"]} alt="avatar"/>
                                    </li>
                                    }
                                    </li>
                                    <li>
                                    <li className="nominations-card_nomination">
                                        Discord
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.Discord || "—"}
                                    </li>
                                    <li onClick={() => setvisibleDiscord(true)} className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    {!myVotes?.SlayKing &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.SlayKing] || streamerImages["Gargamel"]} alt="avatar"/>
                                    </li>
                                    }
                                    {myVotes?.SlayKing &&
                                    <li className="nominations-card_img">
                                        <img src={streamerImages["SlayKing"]} alt="avatar"/>
                                    </li>
                                    }
                                    <li className="nominations-card_nomination">
                                        SlayQuin
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.SlayQuin || "—"}
                                    </li>
                                    <li onClick={() => setvisibleQuin(true)} className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    {!myVotes?.SlayKing &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.SlayKing] || streamerImages["Gargamel"]} alt="avatar"/>
                                    </li>
                                    }
                                    {myVotes?.SlayKing &&
                                    <li className="nominations-card_img">
                                        <img src={streamerImages["SlayKing"]} alt="avatar"/>
                                    </li>
                                    }
                                    <li className="nominations-card_nomination">
                                        SlayQuin
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.SlayQuin || "—"}
                                    </li>
                                    <li onClick={() => setvisibleQuin(true)} className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card_img">
                                        <img src={streamerImages[myVotes?.SlayQuin] || streamerImages["SlayQuin"]} alt="avatar"/>
                                    </li>
                                    <li className="nominations-card_nomination">
                                        SlayQuin
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.SlayQuin || "—"}
                                    </li>
                                    <li onClick={() => setvisibleQuin(true)} className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card_img">
                                        <img src={streamerImages[myVotes?.SlayQuin] || streamerImages["SlayQuin"]} alt="avatar"/>
                                    </li>
                                    <li className="nominations-card_nomination">
                                        SlayQuin
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.SlayQuin || "—"}
                                    </li>
                                    <li onClick={() => setvisibleQuin(true)} className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card_img">
                                        <img src={streamerImages[myVotes?.SlayQuin] || streamerImages["SlayQuin"]} alt="avatar"/>
                                    </li>
                                    <li className="nominations-card_nomination">
                                        SlayQuin
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.SlayQuin || "—"}
                                    </li>
                                    <li onClick={() => setvisibleQuin(true)} className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}