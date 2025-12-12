// Transformation.js

import "./Style/Slayking.css"
import streamerImages from "./Static/streamerImages.js"
import { useState } from "react";

export default function Transformation({
    visibleTransformation,
    setvisibleTransformation,
    onVote,
    setvisibleTelegram,
    transformationIndex,
    setAchievements,
    hasAchievement20,
    setHasAchievement20}) {
    
    const [selectedStreamer, setSelectedStreamer] = useState(null);

    const confirmVote = async (streamer) => {
        const res = await fetch("https://galzun-nay-c390.twc1.net/vote", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ category: "Преображение", streamer }),
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
            body: JSON.stringify({ category: "Преображение" }),
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

        const unlockAchievement = async (key) => {
    const res = await fetch("https://galzun-nay-c390.twc1.net/user/achievement", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ achievement: key }),
    });
    const data = await res.json();
    console.log("Ачивка сохранена:", data);
    };


    return (
        <div>
            {visibleTransformation &&
            <div className='slayking-wrapper'>
                <div className='container'>
                    <div className='slayking'>
                        <div className="slayking__close">
                            <span onClick={() => setvisibleTransformation(false)} ></span>
                        </div>
                        <div className="slayking__header">
                            <h2 className="slayking__header-title">
                                «ПРЕОБРАЖЕНИЕ»
                            </h2>
                            <p className="slayking__header-text">
                                Самые активные из комьюнити, которым мало только писать буковки и кидать голосовые в чатике, эти ребята готовы показать всё на что они способны
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
                            <div className={`slayking__header-img ${transformationIndex === 19 ? "achievements" : ""}`}>
                                <img src={streamerImages.Transformation[transformationIndex]}
                                onClick={() => {
                                if (transformationIndex === 19 && !hasAchievement20) {
                                setAchievements(prev => prev + 1);
                                setHasAchievement20(true);
                                unlockAchievement("achievement20");
                                }
                                }}></img>
                            </div>
                        </div>
                        <div className="slayking__body">
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img transformation-img">
                                    <img src={streamerImages["Ankera_tf"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Ankera
                                </h3>
                                <div
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Ankera_tf")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img transformation-img">
                                    <img src={streamerImages["Максимилиан_tf"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Максимилиан
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Максимилиан_tf")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img transformation-img">
                                    <img src={streamerImages["Laku_Fi_tf"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Laku_Fi
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Laku_Fi_tf")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img transformation-img">
                                    <img src={streamerImages["Япоша_tf"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Япоша
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Япоша_tf")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img transformation-img">
                                    <img src={streamerImages["Котятко_tf"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Котятко
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Котятко_tf")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img transformation-img">
                                    <img src={streamerImages["Лиза_tf"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Лиза
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Лиза_tf")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img transformation-img">
                                    <img src={streamerImages["VaOne_tf"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    VaOne
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("VaOne_tf")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img transformation-img">
                                    <img src={streamerImages["Begro_tf"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Begro
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Begro_tf")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img transformation-img">
                                    <img src={streamerImages["Prozhitka_tf"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Prozhitka
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Prozhitka_tf")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img transformation-img">
                                    <img src={streamerImages["ProstoKvasha_tf"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    ProstoKvasha
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("ProstoKvasha_tf")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img transformation-img">
                                    <img src={streamerImages["Джесcи_tf"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Джесcи
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Джесcи_tf")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img transformation-img">
                                    <img src={streamerImages["David_tf"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    David
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("David_tf")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img transformation-img">
                                    <img src={streamerImages["Gargamel_tf"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Gargamel
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Gargamel_tf")}>
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