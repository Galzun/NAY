// Slayking.js

import "./Style/Slayking.css"
import streamerImages from "./Static/streamerImages.js"
import { useState, useEffect } from "react";

export default function Slayking({visibleKing, setvisibleKing, onVote, visibleTelegram, setvisibleTelegram}) {
    
    const [selectedStreamer, setSelectedStreamer] = useState(null);

    const confirmVote = async (streamer) => {
        const res = await fetch("https://galzun-nay-c390.twc1.net/vote", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ category: "SlayKing", streamer }),
        });
        const data = await res.json();
        console.log("Ответ сервера:", data);
        onVote();
    };

    const handleConfirmClick = () => {
        const token = localStorage.getItem("token");
        if (!token) {
        // если нет токена → открываем модалку Telegram
        setvisibleTelegram(true);
        return;
        }
        // если токен есть → голосуем
        confirmVote(selectedStreamer);
    };



    return (
        <div>
            {visibleKing &&
            <div className='slayking-wrapper'>
                <div className='container'>
                    <div className='slayking'>
                        <div className="slayking__close">
                            <span onClick={() => setvisibleKing(false)} ></span>
                        </div>
                        <div className="slayking__header">
                            <h2 className="slayking__header-title">
                                Выбери стримера в номинации «SLAY KING»
                            </h2>
                            <p className="slayking__header-text">
                                Стример со средним онлайном не менее 3000 за 2025 год на основном Twitch-канале.
                            </p>
                            <div
                            className="slayking__body-card__button"
                            onClick={handleConfirmClick} disabled={!selectedStreamer}>
                            Подтвердить
                            </div>
                            <div className="slayking__header-img">
                                <img src={streamerImages["SlayKing"]}></img>
                            </div>
                        </div>
                        <div className="slayking__body">
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Gargamel"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Gargamel
                                </h3>
                                <div
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Gargamel")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Kot_Cvetkov"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Kot_Cvetkov
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Kot_Cvetkov")}>
                                    Выбрать
                                </div>
                            </div>
                                                        <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Gargamel"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Gargamel
                                </h3>
                                <div
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Gargamel")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Kot_Cvetkov"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Kot_Cvetkov
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Kot_Cvetkov")}>
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