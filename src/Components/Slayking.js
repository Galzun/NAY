// Slayking.js

import "./Style/Slayking.css"
import streamerImages from "./Static/streamerImages.js"
import { useState, useEffect } from "react";

export default function Slayking({visibleKing, setvisibleKing, onVote, setvisibleTelegram}) {
    
    const [selectedStreamer, setSelectedStreamer] = useState(null);

    const confirmVote = async (streamer) => {
        const res = await fetch("https://galzun-nay-c390.twc1.net/vote", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ category: "NayKing", streamer }),
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
            body: JSON.stringify({ category: "NayKing" }),
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
            {visibleKing &&
            <div className='slayking-wrapper'>
                <div className='container'>
                    <div className='slayking'>
                        <div className="slayking__close">
                            <span onClick={() => setvisibleKing(false)} ></span>
                        </div>
                        <div className="slayking__header">
                            <h2 className="slayking__header-title">
                                «NAY KING»
                            </h2>
                            <p className="slayking__header-text">
                                Сэр чатерс, который не давал затихнуть Обсуждаловке и проявлял любую активность в ней почти самого его появления
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
                                    Kot Cvetkov
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Kot_Cvetkov")}>
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
                                    <img src={streamerImages["David"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    David
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("David")}>
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
                                    <img src={streamerImages["Shpegull"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Shpegull
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Shpegull")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Торч"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Торч
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Торч")}>
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
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["сухофрукт"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    сухофрукт
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("сухофрукт")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["ramzes"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    ramzes
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("ramzes")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["деликант"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    деликант
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("деликант")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Вайбмен"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Вайбмен
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Вайбмен")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Достоевский"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Достоевский
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Достоевский")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Fesitkans"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Fesitkans
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Fesitkans")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Джесси"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Джесси
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Джесси")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Кирилл"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Кирилл
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Кирилл")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["FuTuRe"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    ❚█══FཽuཽTཽuཽRཽeཽ══█❚
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("FuTuRe")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["belka_v_masle"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    belka_v_masle
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("belka_v_masle")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["криповыйхайпер"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    криповый хайпер
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("криповыйхайпер")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["ast"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    ast
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("ast")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["HELL_TWT"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    HELL_TWT
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("HELL_TWT")}>
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
                                    <img src={streamerImages["че"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    че
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("че")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["ТреворШарп"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Тревор Шарп
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("ТреворШарп")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Максимилиан"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Максимилиан
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Максимилиан")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Gleb4FeeD"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Gleb4FeeD
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Gleb4FeeD")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["ТофроL"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Тофро L
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("ТофроL")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["KrokodyleDandy"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Krokodyle Dandy
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("KrokodyleDandy")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["сглыпа"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    сглыпа
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("сглыпа")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages["Antoxaxa"]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Antoxaxa
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Antoxaxa")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages[""]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Toksep
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Toksep")}>
                                    Выбрать
                                </div>
                            </div>
                            <div className="slayking__body-card">
                                <div className="slayking__body-card__img">
                                    <img src={streamerImages[""]}></img>
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
                                    <img src={streamerImages[""]}></img>
                                </div>
                                <h3 className="slayking__body-card__name">
                                    Максим
                                </h3>
                                <div 
                                    className="slayking__body-card__button"
                                    onClick={() => setSelectedStreamer("Максим")}>
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