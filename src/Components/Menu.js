import "./Style/Menu.css"
import { ReactComponent as TelegramIcon } from "./Static/Icons/telegram-svgrepo-com.svg";
import streamerImages from "./Static/streamerImages.js"


export default function Menu({background, setBackground, achievements}) {

    const visbackground = () => {
        if (background) {
            setBackground(false)
        }
        else setBackground(true)
    }

	return (
		<div className='menu-wrapper'>
			<div className='container'>
				<div className={`menu ${background ? "on" : ""}`}>
                        <img className="menu-icon" src={streamerImages["NayIcon"]}/>
                    <ul className='menu-block_social'>
                        <p className="menu-block_social-achievements">Ваши ачивки: {achievements}</p>
                        <div className={`tumbler ${background ? "on" : ""}`} onClick={visbackground}>
                            <div className={`tumbler-cyrcle ${background ? "on" : ""}`}></div>
                        </div>
                        <a rel="noopener noreferrer" target="_blank" href="https://t.me/jabalaku"><TelegramIcon width={38} height={38} /></a>
                        <div className="menu-block_social-avatar">
                            <img id="tgAvatar"></img>
                        </div>
					</ul>
				</div>
			</div>
		</div>
	)
}
