// Slayquin.js

import "./Style/Slayking.css"
import Popka from "./Static/avatar/50pka.webp";
import Cs from "./Static/avatar/counter-strike.webp";
import { useState } from "react";

export default function Slayking({visibleQuin, setvisibleQuin}) {
    
    const [selectedStreamer, setSelectedStreamer] = useState(null);

    const confirmVote = async () => {
        const token = localStorage.getItem("token");
        const res = await fetch("https://galzun-nay-c390.twc1.net/vote", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ category: "SlayQuin", streamer: selectedStreamer }),
        });
        const data = await res.json();
        console.log("Ответ сервера:", data);
    };


    return (
        <div>
            {visibleQuin &&
            <div className='slayking-wrapper'>
                <div className='container'>
                    <div className='slayking'>
                        <div className="slayking__close">
                            <span onClick={() => setvisibleQuin(false)} ></span>
                        </div>
                        <div className="slayking__header">
                            <h2 className="slayking__header-title">
                                Выбери стримера в номинации «SLAY QUIN
                            </h2>
                            <p className="slayking__header-text">
                                Стример со средним онлайном не менее 3000 за 2025 год на основном Twitch-канале.
                            </p>
                            <div
                                className="slayking__body-card__button"
                                onClick={confirmVote} disabled={!selectedStreamer}>
                                Подтвердить
                            </div>
                            <div className="slayking__header-img">
                                <img src={Cs}></img>
                            </div>
                        </div>
                        <div className="slayking__body">
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={Popka}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Лиза
                                </h3>
                                <div
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Лиза")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={Popka}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Позер
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Позер")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={Popka}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    5opka
                                </h3>
                                <div className="slayking__body-card__button">
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={Popka}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    5opka
                                </h3>
                                <div className="slayking__body-card__button">
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={Popka}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    5opka
                                </h3>
                                <div className="slayking__body-card__button">
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={Popka}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    5opka
                                </h3>
                                <div className="slayking__body-card__button">
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={Popka}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    5opka
                                </h3>
                                <div className="slayking__body-card__button">
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={Popka}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    5opka
                                </h3>
                                <div className="slayking__body-card__button">
                                    Выбрать
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}