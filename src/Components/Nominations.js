// Nominations.js

import "./Style/Nominations.css"
import Popka from "./Static/avatar/50pka.webp";
import Cs from "./Static/avatar/counter-strike.webp";

export default function Nominations({setvisibleKing, setvisibleQuin}) {

    const [myVotes, setMyVotes] = useState({});

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
            votesMap[v.category] = v.streamer_name;
        });
        setMyVotes(votesMap);
        };
        fetchVotes();
    }, []);

    return (
                <div className='nominations-wrapper'>
                    <div className='container'>
                        <div className='nominations'>
                            <div className="nominations-king">
                                <ul className="nominations-card-king">
                                    <li className="nominations-card_img">
                                        <img src={Popka} alt="avatar"/>
                                    </li>
                                    <li className="nominations-card_nomination">
                                        SlayKing
                                    </li>
                                    <li className="nominations-card_name">
                                        {myVotes["SlayKing"] || "—"} {/* показываем стримера из бэкенда */}
                                    </li>
                                    <li onClick={() => setvisibleKing(true)} className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                </ul>
                                <ul className="nominations-card-king">
                                    <li className="nominations-card_img">
                                        <img src={Popka} alt="avatar"/>
                                    </li>
                                    <li className="nominations-card_nomination">
                                        SlayQuin
                                    </li>
                                    <li className="nominations-card_name">
                                        Лиза
                                    </li>
                                    <li onClick={() => setvisibleQuin(true)} className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                </ul>
                            </div>
                            <div className="nominations-nomination">
                                <ul className="nominations-card">
                                    <li className="nominations-card_img">
                                        <img src={Cs} alt="avatar"/>
                                    </li>
                                    <li className="nominations-card_nomination">
                                        SlayKing
                                    </li>
                                    <li className="nominations-card_name">
                                        5opka
                                    </li>
                                    <li className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card_img">
                                        <img src={Cs} alt="avatar"/>
                                    </li>
                                    <li className="nominations-card_nomination">
                                        SlayKing
                                    </li>
                                    <li className="nominations-card_name">
                                        5opka
                                    </li>
                                    <li className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card_img">
                                        <img src={Cs} alt="avatar"/>
                                    </li>
                                    <li className="nominations-card_nomination">
                                        SlayKing
                                    </li>
                                    <li className="nominations-card_name">
                                        5opka
                                    </li>
                                    <li className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                </ul>
                                                                <ul className="nominations-card">
                                    <li className="nominations-card_img">
                                        <img src={Popka} alt="avatar"/>
                                    </li>
                                    <li className="nominations-card_nomination">
                                        SlayKing
                                    </li>
                                    <li className="nominations-card_name">
                                        5opka
                                    </li>
                                    <li className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card_img">
                                        <img src={Popka} alt="avatar"/>
                                    </li>
                                    <li className="nominations-card_nomination">
                                        SlayKing
                                    </li>
                                    <li className="nominations-card_name">
                                        5opka
                                    </li>
                                    <li className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                </ul>
                                <ul className="nominations-card">
                                    <li className="nominations-card_img">
                                        <img src={Popka} alt="avatar"/>
                                    </li>
                                    <li className="nominations-card_nomination">
                                        SlayKing
                                    </li>
                                    <li className="nominations-card_name">
                                        5opka
                                    </li>
                                    <li className="nominations-card_buttom">
                                        Сделать выбор
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}