// Zavoz.js

import "./Style/Slayking.css"
import streamerImages from "./Static/streamerImages.js"
import { useState } from "react";

export default function Zavoz({visibleZavoz, setvisibleZavoz, onVote, setvisibleTelegram}) {
    
    const [selectedStreamer, setSelectedStreamer] = useState(null);

    const confirmVote = async (streamer) => {
        const res = await fetch("https://galzun-nay-c390.twc1.net/vote", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ category: "Завоз", streamer }),
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
            body: JSON.stringify({ category: "Завоз" }),
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
            {visibleZavoz &&
            <div className='slayking-wrapper'>
                <div className='container'>
                    <div className='slayking'>
                        <div className="slayking__close">
                            <span onClick={() => setvisibleZavoz(false)} ></span>
                        </div>
                        <div className="slayking__header">
                            <h2 className="slayking__header-title">
                                «ЗАВОЗЕР»
                            </h2>
                            <p className="slayking__header-text">
                                Этих людей знает каждый, их всегда выделяют, слушая о них мы смеёмся и удивляемся, а они не перестают завозить нам контентика))WW прикольчики А^А^А^А^А^АХАХАХЕХЕХЕ 0111100010 LMAOXDDDD
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
                                <img src={streamerImages["Zavoz"]}></img>
                            </div>
                        </div>
                        <div className="slayking__body">
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Ermol"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Ermol
                                </h3>
                                <div
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Ermol")}>
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
                                    <img src={streamerImages["Prozhitka"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Prozhitka
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Prozhitka")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["BegroSpid"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    BegroSpid
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("BegroSpid")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["fivsov"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    fivsov
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("fivsov")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["VaOne"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    VaOne
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("VaOne")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Galzun"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Galzun
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Galzun")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["EtermentalL"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    EtermentalL
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("EtermentalL")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["lxtdxwn"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    lxtdxwn
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("lxtdxwn")}>
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
                                    <img src={streamerImages["ProstoKvasha"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    ProstoKvasha
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("ProstoKvasha")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["илья"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Илюха
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Илюха")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["АртёмкаКрутой"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Артёмка Крутой
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("АртёмкаКрутой")}>
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