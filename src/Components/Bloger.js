// Bloger.js

import "./Style/Slayking.css"
import streamerImages from "./Static/streamerImages.js"
import { useState } from "react";

export default function Bloger({visibleBloger, setvisibleBloger, onVote, setvisibleTelegram}) {
    
    const [selectedStreamer, setSelectedStreamer] = useState(null);

    const confirmVote = async (streamer) => {
        const res = await fetch("https://galzun-nay-c390.twc1.net/vote", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ category: "Bloger", streamer }),
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
            body: JSON.stringify({ category: "Bloger" }),
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
            {visibleBloger &&
            <div className='slayking-wrapper'>
                <div className='container'>
                    <div className='slayking'>
                        <div className="slayking__close">
                            <span onClick={() => setvisibleBloger(false)} ></span>
                        </div>
                        <div className="slayking__header">
                            <h2 className="slayking__header-title">
                                «БЛОГЕР»
                            </h2>
                            <p className="slayking__header-text">
                                Эти люди не стесняются своей жизни или внешности, они готовы вам всё показать в кружках на телефоне или на вэбках компьютеров. Мы знаем как они едят, пьют, взрывают унитазы, и какое сегодня у них выражение лица
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
                                <img src={streamerImages["Bloger"]}></img>
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
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}