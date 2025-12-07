import "./Style/Telegram.css"
import { useEffect, useRef } from "react";

function Telegram({ onLogin, setvisibleTelegram }) {
    const containerRef = useRef(null);

    useEffect(() => {
        window.TelegramLoginWidget = {
        dataOnauth: async (user) => {
            console.log("Данные от Telegram:", user);
                if (user.photo_url) {
                    const avatar = document.getElementById("tgAvatar");
                    if (avatar) {
                        avatar.src = user.photo_url;
                    }
                }
            try {
            const res = await fetch("https://galzun-nay-c390.twc1.net/auth/telegram", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });
            const data = await res.json();
            console.log("Ответ сервера:", data);

            if (user.photo_url) {
                localStorage.setItem("tgAvatar", user.photo_url);
            }

            if (data.token) {
                localStorage.setItem("token", data.token);
                onLogin();
                setvisibleTelegram(false); // закрываем модалку после успешного входа
            }
            } catch (err) {
            console.error("Ошибка запроса:", err);
            }
        },
        };

        const script = document.createElement("script");
        script.src = "https://telegram.org/js/telegram-widget.js?22";
        script.async = true;
        script.setAttribute("data-telegram-login", "GalzunNay_bot");
        script.setAttribute("data-size", "large");
        script.setAttribute("data-userpic", "false");
        script.setAttribute("data-request-access", "write");
        script.setAttribute("data-onauth", "TelegramLoginWidget.dataOnauth(user)");

        if (containerRef.current) {
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(script);
        }
    }, [onLogin, setvisibleTelegram]);

    return (
        <div className="modal-overlay">
        <div className="modal">
            <div className="modal__close">
                <span onClick={() => setvisibleTelegram(false)} ></span>
            </div>
            <h2>Вход через Telegram</h2>
            <div ref={containerRef}></div>
        </div>
        </div>
    );
}

export default Telegram;
