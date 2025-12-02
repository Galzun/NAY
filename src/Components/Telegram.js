function Telegram() {
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

export default Telegram;