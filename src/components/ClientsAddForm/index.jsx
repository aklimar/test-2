import "./styles.scss";


export default function ClientsAddForm({ isVisible, setIsVisible }) {
	return (
		<>
			<div className={ `clients-add ${isVisible ? "active" : ""}` }>
				<div className="clients-add__top">
					<svg onClick={ () => setIsVisible(prev => !prev) } className="clients-add__back" height="24" width="24">
						<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-back"/>
					</svg>
					<h6 className="clients-add__title">Новый клиент</h6>
					<svg onClick={ () => setIsVisible(prev => !prev) } className="clients-add__icon" height="18" width="18">
						<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-cross"/>
					</svg>
				</div>
				<form className="clients-add__form">
					<div className="clients-add__block">
						<input
							className="clients-add__input"
							placeholder="Имя"
							type="text"
						/>
						<input
							className="clients-add__input"
							placeholder="Фамилия"
							type="text"
						/>
						<input
							className="clients-add__input"
							placeholder="Отчество"
							type="text"
						/>
						<input
							className="clients-add__input"
							placeholder="Дата рождения"
							type="text"
						/>
						<input
							className="clients-add__input"
							placeholder="+7 (___) ___ __ __"
							type="tel"
						/>
						<input
							className="clients-add__input"
							placeholder="Эл. почта"
							type="email"
						/>
					</div>
					<div className="clients-add__block">
						<div className="clients-add__field">
							<label className="clients-add__label">Пол</label>
							<div className="clients-add__col">
								<input
									defaultChecked
									className="clients-add__radio"
									id="male"
									name="gender" 
									type="radio"
								/>
								<label htmlFor="male" className="clients-add__label">Мужской</label>
							</div>
							<div className="clients-add__col">
								<input
									className="clients-add__radio"
									id="female"
									name="gender" 
									type="radio"
								/>
								<label htmlFor="female" className="clients-add__label">Женский</label>
							</div>
						</div>
						<input
							className="clients-add__input"
							placeholder="Скидка"
							type="text"
						/>
						<input
							className="clients-add__input"
							placeholder="Оказано услуг на сумму"
							type="text"
						/>
					</div>
					<button className="clients-add__button">Сохранить</button>
				</form>
			</div>
		</>
	);
};