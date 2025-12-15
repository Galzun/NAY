// Nominations.js

import "./Style/Nominations.css"
import streamerImages from "./Static/streamerImages"
import moderDisplayNames from "./Static/moderDisplayNames.js";
import transDisplayNames from "./Static/transDisplayNames.js";
import shipDisplayNames from "./Static/shipDisplayNames.js";
import streamerDisplayNames from "./Static/streamerDisplayNames.js";
import { useState, useEffect } from "react";

export default function Nominations({setvisibleKing, 
    setvisibleQuin, 
    setvisibleDiscord, 
    setvisibleBloger, 
    setvisibleStreamer, 
    setvisibleModer, 
    setvisibleMinecraft,
    setvisibleLor,
    setvisibleTransformation,
    setvisibleZavoz,
    setvisibleSoul,
    setvisibleShip,
    setvisibleRagebait,
    setvisiblePodliza,

    achievements,
    setAchievements,
    transformationIndex,
    setTransformationIndex,
    hasAchievement20,
    setHasAchievement20,
    myVotes, setMyVotes}) {

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

    useEffect(() => {
    console.log("Achievements updated:", achievements);
    }, [achievements]);

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
                <div className='nominations-wrapper'>
                    <div className='container'>
                        <div className='nominations'>
                            <div className="nominations-king">
                                <ul className="nominations-card-king">
                                    <li className="nominations-card-half">
                                    {myVotes?.NayKing &&
                                    <li className="nominations-card_img-king-activ">
                                        <img src={streamerImages[myVotes?.NayKing] || streamerImages["Kot_Cvetkov"]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.NayKing &&
                                    <li className="nominations-card_img-king">
                                        <img src={streamerImages["SlayKing"]} alt="avatar"/>
                                    </li>
                                    }
                                    </li>
                                    <li>
                                    <li className="nominations-card_nomination">
                                        NAYKING
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.NayKing || "—"}
                                    </li>
                                    <li onClick={() => {
                                        setvisibleKing(true);
                                        setTransformationIndex(Math.floor(Math.random() * streamerImages.Transformation.length));
                                        }} 
                                        className="nominations-card_buttom">
                                    Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                                <ul className="nominations-card-king">
                                    <li className="nominations-card-half">
                                    {myVotes?.NayQuin &&
                                    <li className="nominations-card_img-king-activ">
                                        <img src={streamerImages[myVotes?.NayQuin]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.NayQuin &&
                                    <li className="nominations-card_img-king">
                                        <img src={streamerImages["SlayQuin"]} alt="avatar"/>
                                    </li>
                                    }
                                    </li>
                                    <li>
                                    <li className="nominations-card_nomination">
                                        NAYQUEEN
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.NayQuin || "—"}
                                    </li>
                                    <li onClick={() => {
                                        setvisibleQuin(true);
                                        setTransformationIndex(Math.floor(Math.random() * streamerImages.Transformation.length));
                                        }}
                                        className="nominations-card_buttom">
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
                                        DISCORD
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.Discord || "—"}
                                    </li>
                                    <li onClick={() => {
                                        setvisibleDiscord(true);
                                        setTransformationIndex(Math.floor(Math.random() * streamerImages.Transformation.length));
                                        }}
                                        className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card-half">
                                    {myVotes?.Стример &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Стример]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Стример &&
                                    <li className="nominations-card_img">
                                        <img src={streamerImages["Streamer"]} alt="avatar"/>
                                    </li>
                                    }
                                    </li>
                                    <li>
                                    <li className="nominations-card_nomination">
                                        СТРИМЕР
                                    </li>
                                    <li className="nominations-card_name">
                                        {streamerDisplayNames[myVotes?.Стример] || "—"}
                                    </li>
                                    <li onClick={() => {
                                        setvisibleStreamer(true)
                                        setTransformationIndex(Math.floor(Math.random() * streamerImages.Transformation.length));
                                        }}
                                        className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card-half">
                                    {myVotes?.Блогер &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Блогер]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Блогер &&
                                    <li className="nominations-card_img">
                                        <img src={streamerImages["Bloger"]} alt="avatar"/>
                                    </li>
                                    }
                                    </li>
                                    <li>    
                                    <li className="nominations-card_nomination">
                                        БЛОГЕР
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.Блогер || "—"}
                                    </li>
                                    <li onClick={() => {
                                        setvisibleBloger(true)
                                        setTransformationIndex(Math.floor(Math.random() * streamerImages.Transformation.length));
                                        }}
                                        className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card-half">
                                    {myVotes?.Модератор &&
                                    <li className="nominations-card_img-activ nobd">
                                        <img src={streamerImages[myVotes?.Модератор]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Модератор &&
                                    <li className="nominations-card_img">
                                        <img src={streamerImages["Moder"]} alt="avatar"/>
                                    </li>
                                    }
                                    </li>
                                    <li>    
                                    <li className="nominations-card_nomination">
                                        РЫЦАРЬ
                                    </li>
                                    <li className="nominations-card_name">
                                        {moderDisplayNames[myVotes?.Модератор] || "—"}
                                    </li>
                                    <li onClick={() => {
                                        setvisibleModer(true)
                                        setTransformationIndex(Math.floor(Math.random() * streamerImages.Transformation.length));
                                        }}
                                        className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card-half">
                                    {myVotes?.Minecraft &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Minecraft]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Minecraft &&
                                    <li className="nominations-card_img">
                                        <img src={streamerImages["Minecraft"]} alt="avatar"/>
                                    </li>
                                    }
                                    </li>
                                    <li>    
                                    <li className="nominations-card_nomination">
                                        MINECRAFT
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.Minecraft || "—"}
                                    </li>
                                    <li onClick={() => {
                                        setvisibleMinecraft(true)
                                        setTransformationIndex(Math.floor(Math.random() * streamerImages.Transformation.length));
                                        }}
                                        className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card-half">
                                    {myVotes?.Лоровед &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Лоровед]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Лоровед &&
                                    <li className="nominations-card_img">
                                        <img src={streamerImages["Lor"]} alt="avatar"/>
                                    </li>
                                    }
                                    </li>
                                    <li>    
                                    <li className="nominations-card_nomination">
                                        ЛОРОВЕД
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.Лоровед || "—"}
                                    </li>
                                    <li onClick={() => {
                                        setvisibleLor(true)
                                        setTransformationIndex(Math.floor(Math.random() * streamerImages.Transformation.length));
                                        }}
                                        className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card-half">
                                    {myVotes?.Преображение &&
                                    <li className="nominations-card_img-activ nobd">
                                        <img src={streamerImages[myVotes?.Преображение]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Преображение && (
                                    <li className={`nominations-card_img ${transformationIndex === 19 ? "achievements" : ""}`}>
                                        <img 
                                        src={streamerImages.Transformation[transformationIndex]}
                                        onClick={() => {
                                            if (transformationIndex === 19 && !hasAchievement20) {
                                            setAchievements(prev => prev + 1); // +1 к ачивкам
                                            setHasAchievement20(true);         // отмечаем, что ачивка получена
                                            unlockAchievement("achievement20");
                                            }
                                        }}
                                        alt="avatar" />
                                    </li>
                                    )}
                                    </li>
                                    <li>    
                                    <li className="nominations-card_nomination transformation">
                                        ПРЕОБРАЖЕНИЕ
                                    </li>
                                    <li className="nominations-card_name">
                                        {transDisplayNames[myVotes?.Преображение] || "—"}
                                    </li>
                                    <li onClick={() => {
                                        setvisibleTransformation(true)
                                        setTransformationIndex(Math.floor(Math.random() * streamerImages.Transformation.length));
                                        }}
                                        className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card-half">
                                    {myVotes?.Завоз &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Завоз]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Завоз &&
                                    <li className="nominations-card_img">
                                        <img src={streamerImages["Zavoz"]} alt="avatar"/>
                                    </li>
                                    }
                                    </li>
                                    <li>    
                                    <li className="nominations-card_nomination">
                                        ЗАВОЗЕР
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.Завоз || "—"}
                                    </li>
                                    <li onClick={() => {
                                        setvisibleZavoz(true)
                                        setTransformationIndex(Math.floor(Math.random() * streamerImages.Transformation.length));
                                        }}
                                        className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card-half">
                                    {myVotes?.Душа &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Душа]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Душа &&
                                    <li className="nominations-card_img">
                                        <img src={streamerImages["Soul"]} alt="avatar"/>
                                    </li>
                                    }
                                    </li>
                                    <li>    
                                    <li className="nominations-card_nomination">
                                        ДУША ЧАТА
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.Душа || "—"}
                                    </li>
                                    <li onClick={() => {
                                        setvisibleSoul(true)
                                        setTransformationIndex(Math.floor(Math.random() * streamerImages.Transformation.length));
                                        }}
                                        className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card-half">
                                    {myVotes?.Шипп &&
                                    <li className="nominations-card_img-activ sh">
                                        <img src={streamerImages[myVotes?.Шипп]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Шипп &&
                                    <li className="nominations-card_img">
                                        <img src={streamerImages["Ship"]} alt="avatar"/>
                                    </li>
                                    }
                                    </li>
                                    <li>    
                                    <li className="nominations-card_nomination">
                                        ШИПП
                                    </li>
                                    <li className="nominations-card_name">
                                        {shipDisplayNames[myVotes?.Шипп] || "—"}
                                    </li>
                                    <li onClick={() => {
                                        setvisibleShip(true)
                                        setTransformationIndex(Math.floor(Math.random() * streamerImages.Transformation.length));
                                        }}
                                        className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                            </div>
                            <div className="nominations-king looser">
                                <ul className="nominations-card">
                                    <li className="nominations-card-half">
                                    {myVotes?.Рэйджбайт &&
                                    <li className="nominations-card_img-activ">
                                    <img src={streamerImages[myVotes?.Рэйджбайт]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Рэйджбайт &&
                                    <li className="nominations-card_img">
                                    <img src={streamerImages["Ragebait"]} alt="avatar"/>
                                    </li>
                                    }
                                    </li>
                                    <li>    
                                    <li className="nominations-card_nomination">
                                    РЕЙДЖБАЙТЕР
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.Рэйджбайт || "—"}
                                    </li>
                                    <li onClick={() => {
                                        setvisibleRagebait(true)
                                        setTransformationIndex(Math.floor(Math.random() * streamerImages.Transformation.length));
                                        }}
                                        className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card-half">
                                    {myVotes?.Подлиза &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Подлиза]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Подлиза &&
                                    <li className="nominations-card_img">
                                        <img src={streamerImages["Podliza"]} alt="avatar"/>
                                    </li>
                                    }
                                    </li>
                                    <li>    
                                    <li className="nominations-card_nomination">
                                        ПОДЛИЗА
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes?.Подлиза || "—"}
                                    </li>
                                    <li onClick={() => {
                                        setvisiblePodliza(true)
                                        setTransformationIndex(Math.floor(Math.random() * streamerImages.Transformation.length));
                                        }}
                                        className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}