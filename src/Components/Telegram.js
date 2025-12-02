// Telegram.js

import { useEffect, useRef } from "react";

function Telegram() {
    const containerRef = useRef(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://telegram.org/js/telegram-widget.js?22";
        script.async = true;
        script.setAttribute("data-telegram-login", "GalzunNay_bot"); // username твоего бота
        script.setAttribute("data-size", "large");
        script.setAttribute("data-userpic", "false");
        script.setAttribute("data-request-access", "write");
        script.setAttribute("data-onauth", "TelegramLoginWidget.dataOnauth(user)");

    if (containerRef.current) {
        containerRef.current.innerHTML = ""; // очистим контейнер
        containerRef.current.appendChild(script);
    }

        window.TelegramLoginWidget = {
        dataOnauth: async (user) => {
            const res = await fetch("https://galzun-nay-c390.twc1.net/auth/telegram", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
            });
            const data = await res.json();
            localStorage.setItem("token", data.token);
        },
        };
    }, []);

  return <div ref={containerRef}></div>; // теперь виджет появится внутри этого div
}

export default Telegram;
