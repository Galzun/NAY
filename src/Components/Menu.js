import "./Style/Menu.css"
import { ReactComponent as VkIcon } from "./Static/Icons/vk-svgrepo-com.svg";
import { ReactComponent as TelegramIcon } from "./Static/Icons/telegram-svgrepo-com.svg";


export default function Menu() {
	return (
		<div className='menu-wrapper'>
			<div className='container'>
				<div className='menu'>
					<ul className='menu-block'>
						<a href="#">
                            НОМИНАЦИИ
                        </a>
                        <a href="#">
                            КУПИТЬ БИЛЕТЫ
                        </a>
                        <a href="#">
                            FAQ
                        </a>
					</ul>
                    <ul className='menu-block_social'>
						<a href="#">
                            SUPPORT
                        </a>
                        <a rel="noopener noreferrer" target="_blank" href="https://t.me/jabalaku"><VkIcon width={38} height={38} /></a>
                        <a rel="noopener noreferrer" target="_blank" href="https://t.me/jabalaku"><TelegramIcon width={38} height={38} /></a>
					</ul>
				</div>
			</div>
		</div>
	)
}
