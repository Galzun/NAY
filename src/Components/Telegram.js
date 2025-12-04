import { useEffect, useRef } from "react";

function Telegram({onLogin}) {
    const containerRef = useRef(null);

    useEffect(() => {
        // Определяем функцию ДО вставки скрипта
        window.TelegramLoginWidget = {
        dataOnauth: async (user) => {
            console.log("Данные от Telegram:", user); // теперь увидишь в консоли

            try {
            const res = await fetch("https://galzun-nay-c390.twc1.net/auth/telegram", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            });
            const data = await res.json();
            console.log("Ответ сервера:", data);
            if (data.token) {
                localStorage.setItem("token", data.token);
                onLogin(); // обновляем голоса сразу после входа
            }
            } catch (err) {
            console.error("Ошибка запроса:", err);
            }
        },
    };

    const script = document.createElement("script");
    script.src = "https://telegram.org/js/telegram-widget.js?22";
    script.async = true;
    script.setAttribute("data-telegram-login", "GalzunNay_bot"); // username твоего бота
    script.setAttribute("data-size", "large");
    script.setAttribute("data-userpic", "false");
    script.setAttribute("data-request-access", "write");
    script.setAttribute("data-onauth", "TelegramLoginWidget.dataOnauth(user)");

    if (containerRef.current) {
        containerRef.current.innerHTML = "";
        containerRef.current.appendChild(script);
        }
    }, [onLogin]);

    return <div ref={containerRef}></div>;
}

export default Telegram;
