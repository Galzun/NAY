// Slayquin.js

import "./Style/Slayking.css"
import streamerImages from "./Static/streamerImages.js"
import { useState } from "react";

export default function Slayking({visibleQuin, setvisibleQuin, onVote}) {
    
    const [selectedStreamer, setSelectedStreamer] = useState(null);

    const confirmVote = async (streamer) => {
    const res = await fetch("https://galzun-nay-c390.twc1.net/vote", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ category: "SlayQuin", streamer }),
    });
    const data = await res.json();
    console.log("Ответ сервера:", data);

    // обновляем список голосов
    onVote();
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
                            onClick={() => confirmVote(selectedStreamer)} disabled={!selectedStreamer}>
                            Подтвердить
                            </div>
                            <div className="slayking__header-img">
                                <img src={streamerImages["Cs"]}></img>
                            </div>
                        </div>
                        <div className="slayking__body">
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Ланя"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Ланя
                                </h3>
                                <div
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Ланя")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Позер"]}></img>
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
                                    <img src={streamerImages["5opka"]}></img>
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
                                    <img src={streamerImages["5opka"]}></img>
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
                                    <img src={streamerImages["5opka"]}></img>
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
                                    <img src={streamerImages["5opka"]}></img>
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
                                    <img src={streamerImages["5opka"]}></img>
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
                                    <img src={streamerImages["5opka"]}></img>
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