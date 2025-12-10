// Nominations.js

import "./Style/Nominations.css"
import streamerImages from "./Static/streamerImages"
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

    const [transformationIndex, setTransformationIndex] = useState(0);

    const [hasAchievement20, setHasAchievement20] = useState(false);

    useEffect(() => {
    console.log("Achievements updated:", achievements);
    }, [achievements]);


    return (
                <div className='nominations-wrapper'>
                    <div className='container'>
                        <div className='nominations'>
                            <div className="nominations-king">
                                <ul className="nominations-card-king">
                                    <li className="nominations-card-half">
                                    {myVotes?.SlayKing &&
                                    <li className="nominations-card_img-king-activ">
                                        <img src={streamerImages[myVotes?.SlayKing] || streamerImages["Kot_Cvetkov"]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.SlayKing &&
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
                                        {myVotes?.SlayKing || "—"}
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
                                    {myVotes?.SlayQuin &&
                                    <li className="nominations-card_img-king-activ">
                                        <img src={streamerImages[myVotes?.SlayQuin]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.SlayQuin &&
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
                                        {myVotes?.SlayQuin || "—"}
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
                                    {myVotes?.Streamer &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Streamer]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Streamer &&
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
                                        {myVotes?.Streamer || "—"}
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
                                    {myVotes?.Bloger &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Bloger]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Bloger &&
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
                                        {myVotes?.Bloger || "—"}
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
                                    {myVotes?.Moder &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Moder]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Moder &&
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
                                        {myVotes?.Moder || "—"}
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
                                    {myVotes?.Lor &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Lor]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Lor &&
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
                                        {myVotes?.Lor || "—"}
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
                                    {myVotes?.Transformation &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Transformation]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Transformation && (
                                    <li className={`nominations-card_img ${transformationIndex === 19 ? "achievements" : ""}`}>
                                        <img 
                                        src={streamerImages.Transformation[transformationIndex]}
                                        onClick={() => {
                                            if (transformationIndex === 19 && !hasAchievement20) {
                                            setAchievements(prev => prev + 1); // +1 к ачивкам
                                            setHasAchievement20(true);         // отмечаем, что ачивка получена
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
                                        {myVotes?.Transformation || "—"}
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
                                    {myVotes?.Zavoz &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Zavoz]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Zavoz &&
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
                                        {myVotes?.Zavoz || "—"}
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
                                    {myVotes?.Soul &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Soul]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Soul &&
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
                                        {myVotes?.Soul || "—"}
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
                                    {myVotes?.Ship &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Ship]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Ship &&
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
                                        {myVotes?.Ship || "—"}
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
                                    {myVotes?.Ragebait &&
                                    <li className="nominations-card_img-activ">
                                    <img src={streamerImages[myVotes?.Ragebait]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Ragebait &&
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
                                        {myVotes?.Ragebait || "—"}
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
                                    {myVotes?.Podliza &&
                                    <li className="nominations-card_img-activ">
                                        <img src={streamerImages[myVotes?.Podliza]} alt="avatar"/>
                                    </li>
                                    }
                                    {!myVotes?.Podliza &&
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
                                        {myVotes?.Podliza || "—"}
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