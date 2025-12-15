// Slayquin.js

import "./Style/Slayking.css"
import streamerImages from "./Static/streamerImages.js"
import { useState } from "react";

export default function Slayquin({visibleQuin, setvisibleQuin, onVote, setvisibleTelegram}) {
    
    const [selectedStreamer, setSelectedStreamer] = useState(null);

    const confirmVote = async (streamer) => {
        const res = await fetch("https://galzun-nay-c390.twc1.net/vote", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ category: "NayQuin", streamer }),
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
            body: JSON.stringify({ category: "NayQuin" }),
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
            {visibleQuin &&
            <div className='slayking-wrapper'>
                <div className='container'>
                    <div className='slayking'>
                        <div className="slayking__close">
                            <span onClick={() => setvisibleQuin(false)} ></span>
                        </div>
                        <div className="slayking__header">
                            <h2 className="slayking__header-title">
                                «NAY QUEEN
                            </h2>
                            <p className="slayking__header-text">
                                Дама обсуждаловки, которая долгое время пробуждала чат своей красотой и общительностью
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
                                <img src={streamerImages["SlayQuin"]}></img>
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
                                    <img src={streamerImages["IIIypuk"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    IIIypuk
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("IIIypuk")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Laku_Fi"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Laku_Fi
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Laku_Fi")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["NIKA"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    NIKA
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("NIKA")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Ankera"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Ankera
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Ankera")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["menster"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    menster
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("menster")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["япоша"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    япоша
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("япоша")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["катятка"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    катятка
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("катятка")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Кепочка"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Кепочка
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Кепочка")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Нота"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    ♪
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Нота")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Лупа"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    🔍
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Лупа")}>
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