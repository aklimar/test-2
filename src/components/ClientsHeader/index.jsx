import "./styles.scss";


export default function ClientsHeader({ setIsPopup, setIsVisible }) {
	return (
		<header className="clients-header">
			<div className="clients-header__mobile">
				<svg onClick={ () => setIsVisible(prev => !prev) } className="clients-header__mobile-burger" height="24" width="24">
					<use xlinkHref="/src/assets/icons/Header_Sprite.svg#icon-header-burger"/>
				</svg>
				<h2 className="clients-header__mobile-title">Клиенты</h2>
			</div>
			<div className="clients-header__left">
				<svg onClick={ () => setIsVisible(prev => !prev) } className="clients-header__left-burger" height="24" width="24">
					<use xlinkHref="/src/assets/icons/Header_Sprite.svg#icon-header-burger"/>
				</svg>
				<input
					className="clients-header__left-search"
					placeholder="Поиск" 
					type="text" 
				/>
				<svg className="clients-header__left-icon" height="17" width="15">
					<use xlinkHref="/src/assets/icons/Header_Sprite.svg#icon-header-search"/>
				</svg>
			</div>
			<div className="clients-header__right">
				<button className="clients-header__right-button filters">
					<svg className="clients-header__right-icon" height="18" width="18">
						<use xlinkHref="/src/assets/icons/Header_Sprite.svg#icon-header-filters-2"/>
					</svg>
					Фильтры
				</button>
				<button onClick={ () => setIsPopup(prev => !prev) } className="clients-header__right-button add">
					<svg className="clients-header__right-icon" height="18" width="18">
						<use xlinkHref="/src/assets/icons/Header_Sprite.svg#icon-header-add"/>
					</svg>
					Добавить клиента
				</button>
			</div>
		</header>
	);
};