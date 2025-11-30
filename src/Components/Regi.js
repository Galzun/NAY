// Regi.js
import { useState } from "react";

function Auth() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        const res = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
        });
        console.log(await res.json());
    };

    const login = async () => {
        const res = await fetch("http://localhost:5000/auth/login", {
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

export default Auth;
