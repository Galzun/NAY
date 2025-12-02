// Regi.js
import { useState } from "react";

function Auth() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        const res = await fetch("https://galzun-nay-c390.twc1.net/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        });
        console.log(await res.json());
    };

    const login = async () => {
        const res = await fetch("https://galzun-nay-c390.twc1.net/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        });
        const data = await res.json();
        console.log(data);

        localStorage.setItem("token", data.token); // сохраняем токен
    };

    return (
        <div>
        <input
            placeholder="Логин"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={register}>Регистрация</button>
        <button onClick={login}>Вход</button>
        </div>
    );
}

function Auth() {
    useEffect(() => {
        // Telegram Login Widget
        window.TelegramLoginWidget = {
            dataOnauth: async (user) => {
                const res = await fetch("https://galzun-nay-c390.twc1.net/auth/telegram", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(user),
                });
                const data = await res.json();
                console.log(data);
                localStorage.setItem("token", data.token);
            }
        };
    }, []);

    return (
        <div>
            <script async src="https://telegram.org/js/telegram-widget.js?22"
                data-telegram-login="YourBotUsername"
                data-size="large"
                data-userpic="false"
                data-request-access="write"
                data-onauth="TelegramLoginWidget.dataOnauth(user)">
            </script>
        </div>
    );
}

export default Auth;
