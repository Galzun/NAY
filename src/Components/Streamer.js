// Streamer.js

import "./Style/Slayking.css"
import streamerImages from "./Static/streamerImages.js"
import { useState, useEffect } from "react";

export default function Streamer({visibleStreamer, setvisibleStreamer, onVote, setvisibleTelegram}) {
    
    const [selectedStreamer, setSelectedStreamer] = useState(null);

    const confirmVote = async (streamer) => {
        const res = await fetch("https://galzun-nay-c390.twc1.net/vote", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ category: "Стример", streamer }),
        });
        const data = await res.json();
        console.log("Ответ сервера:", data);
        onVote();
    };

    const cancelVote = async () => {
        const res = await fetch("https://galzun-nay-c390.twc1.net/vote/cancel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify({ category: "Стример" }),
        });
        const data = await res.json();
        console.log("Отмена голоса:", data);
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
            {visibleStreamer &&
            <div className='slayking-wrapper'>
                <div className='container'>
                    <div className='slayking'>
                        <div className="slayking__close">
                            <span onClick={() => setvisibleStreamer(false)} ></span>
                        </div>
                        <div className="slayking__header">
                            <h2 className="slayking__header-title">
                                «NAY STREAMER
                            </h2>
                            <p className="slayking__header-text">
                                Это гении потоковых вещаний, которые весь год придумывали для вас интересный контент, который мог затянуть ваши взоры на их трансляции
                            </p>
                            <div className="slayking__body-card__buttons">
                                <div
                                className="slayking__body-card__button"
                                onClick={handleConfirmClick} disabled={!selectedStreamer}>
                                Подтвердить
                                </div>
                                <div
                                className="slayking__body-card__button"
                                onClick={cancelVote}>
                                Отменить голос
                                </div>
                            </div>
                            <div className="slayking__header-img">
                                <img src={streamerImages["Streamer"]}></img>
                            </div>
                        </div>
                        <div className="slayking__body">
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Tofro_st"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    <a target="_blank"
                                    rel="noopener"
                                    href="https://www.twitch.tv/t0fr0">Tofro</a>
                                </h3>
                                <div
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Tofro_st")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Begro_st"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    <a target="_blank"
                                    rel="noopener"
                                    href="https://www.twitch.tv/begro_spi">Begro</a>
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Begro_st")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Япоша_st"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    <a target="_blank"
                                    rel="noopener"
                                    href="https://www.twitch.tv/yajaposha">Япоша</a>
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Япоша_st")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Laku_Fi_st"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    <a target="_blank"
                                    rel="noopener"
                                    href="https://www.twitch.tv/LakuFi">Laku_Fi</a>
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Laku_Fi_st")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Ankera_st"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    <a target="_blank"
                                    rel="noopener"
                                    href="https://www.twitch.tv/ave_ankera">Ankera</a>
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Ankera_st")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["DearShiroSan_st"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    <a target="_blank"
                                    rel="noopener"
                                    href="https://www.twitch.tv/dearshirosan">DearShiroSan</a>
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("DearShiroSan_st")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Gargamel_st"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    <a target="_blank"
                                    rel="noopener"
                                    href="https://www.twitch.tv/Gargamel172">Gargamel</a>
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Gargamel_st")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Ramzes_st"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    <a target="_blank"
                                    rel="noopener"
                                    href="https://www.twitch.tv/ramzeskek">Ramzes</a>
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Ramzes_st")}>
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