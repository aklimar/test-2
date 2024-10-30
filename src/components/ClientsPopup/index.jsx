import { useState } from "react";

import "./styles.scss";


export default function ClientsPopup({ isVisible, setIsVisible }) {
	const [activeTab, setActiveTab] = useState(1);


	return (
		<>
			<div className={ `clients-popup ${isVisible ? "active" : ""}` }>
				<div className="clients-popup__info">
					<svg onClick={ () => setIsVisible("") } className="clients-popup__cross" height="18" width="18">
						<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-cross"/>
					</svg>
					<svg onClick={ () => setIsVisible(prev => !prev) } className="clients-popup__back" height="24" width="24">
						<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-back"/>
					</svg>
					<div className="clients-popup__wrapper">
						<img 
							alt="Жуков Антон" 
							src="/src/assets/images/client-1.png" 
						/>
					</div>
					<h2 className="clients-popup__title">Жуков Антон</h2>
					<span className="clients-popup__text">Клиент #2973591</span>
				</div>
				<ul className="clients-popup__tabs">
					<li onClick={ () => setActiveTab(1) } className={ `clients-popup__tabs-el ${ activeTab === 1 ? "active" : ""}` }>Данные клиента</li>
					<li onClick={ () => setActiveTab(2) } className={ `clients-popup__tabs-el ${ activeTab === 2 ? "active" : ""}` }>Визиты</li>
					<li onClick={ () => setActiveTab(3) } className={ `clients-popup__tabs-el ${ activeTab === 3 ? "active" : ""}` }>Статистика</li>
					<li onClick={ () => setActiveTab(4) } className={ `clients-popup__tabs-el ${ activeTab === 4 ? "active" : ""}` }>Лояльность</li>
					<li onClick={ () => setActiveTab(5) } className={ `clients-popup__tabs-el ${ activeTab === 5 ? "active" : ""}` }>Телефония</li>
				</ul>
				<div className="clients-popup__content">
					{activeTab === 1 && (
						<div className="clients-popup__data">
							<div className="clients-popup__block">
								<label htmlFor="phone" className="clients-popup__label">Телефон</label>
								<input 
									readOnly
									className="clients-popup__input"
									value="+7 987 984 65-76"
									id="phone"
									type="tel" 
								/>
							</div>
							<div className="clients-popup__block date">
								<label htmlFor="date" className="clients-popup__label">День рождения</label>
								<input 
									readOnly
									className="clients-popup__input"
									value="12.02.1992"
									id="date"
									type="text" 
								/>
							</div>
							<div className="clients-popup__block email">
								<label htmlFor="email" className="clients-popup__label">Email</label>
								<input 
									readOnly
									className="clients-popup__input"
									value="Ssas@mail.ru"
									id="email"
									type="email" 
								/>
							</div>
							<div className="clients-popup__block comment">
								<label htmlFor="comment" className="clients-popup__label">Комментарий</label>
								<textarea 
									readOnly
									className="clients-popup__input comment"
									value="CRM система помогает создать единую базу клиентов"
									id="comment"
									type="text" 
								/>
							</div>
							<div className="clients-popup__block creating">
								<label htmlFor="creating" className="clients-popup__label">Дата создания</label>
								<input 
									readOnly
									className="clients-popup__input"
									value="09.07.2024, 13:32"
									id="creating"
									type="text" 
								/>
							</div>
							<div className="clients-popup__block buttons">
								<button className="clients-popup__edit">Редактировать данные</button>
								<button className="clients-popup__create">Создать запись</button>
							</div>
						</div>
					)}
					{activeTab === 2 && (
						<div className="clients-popup__visits">
							<div className="clients-popup__table">
								<span className="clients-popup__table-header">Дата визита</span>
								<span className="clients-popup__table-header">Стоимость</span>
								<span className="clients-popup__table-header">Услуга</span>
								<span className="clients-popup__table-header">Мастер</span>
								<span className="clients-popup__table-item">04.10.2024</span>
								<span className="clients-popup__table-item">2 750₽</span>
								<span className="clients-popup__table-item">Массаж спины</span>
								<span className="clients-popup__table-item">Кузьмин Михаил</span>
								<span className="clients-popup__table-item">02.09.2024</span>
								<span className="clients-popup__table-item">4 800₽</span>
								<span className="clients-popup__table-item">Комплексный массаж</span>
								<span className="clients-popup__table-item">Кузьмин Михаил</span>
								<span className="clients-popup__table-item">06.07.2024</span>
								<span className="clients-popup__table-item">3 800₽</span>
								<span className="clients-popup__table-item">Аренда сауны</span>
								<span className="clients-popup__table-item">Медведев Юрий</span>
								<span className="clients-popup__table-item">17.05.2024</span>
								<span className="clients-popup__table-item">4 500₽</span>
								<span className="clients-popup__table-item">Релаксотерапия</span>
								<span className="clients-popup__table-item">Галиченко Ольга</span>
								<span className="clients-popup__table-item">04.10.2024</span>
								<span className="clients-popup__table-item">2 750₽</span>
								<span className="clients-popup__table-item">Массаж спины</span>
								<span className="clients-popup__table-item">Кузьмин Михаил</span>
								<span className="clients-popup__table-item">02.09.2024</span>
								<span className="clients-popup__table-item">4 800₽</span>
								<span className="clients-popup__table-item">Комплексный массаж</span>
								<span className="clients-popup__table-item">Кузьмин Михаил</span>
								<span className="clients-popup__table-item">06.07.2024</span>
								<span className="clients-popup__table-item">3 800₽</span>
								<span className="clients-popup__table-item">Аренда сауны</span>
								<span className="clients-popup__table-item">Медведев Юрий</span>
								<span className="clients-popup__table-item">17.05.2024</span>
								<span className="clients-popup__table-item">4 500₽</span>
								<span className="clients-popup__table-item">Релаксотерапия</span>
								<span className="clients-popup__table-item">Галиченко Ольга</span>
							</div>
							<div className="clients-popup__table-mobile">
								<div className="clients-popup__block">
									<span className="clients-popup__criteria">Дата визита</span>
									<span className="clients-popup__value">11.02.2024</span>
								</div>
								<div className="clients-popup__block">
									<span className="clients-popup__criteria">Стоимость</span>
									<span className="clients-popup__value">1 500₽</span>
								</div>
								<div className="clients-popup__block">
									<span className="clients-popup__criteria">Услуга</span>
									<span className="clients-popup__value">Обновление системы</span>
								</div>
								<div className="clients-popup__block">
									<span className="clients-popup__criteria">Мастер</span>
									<span className="clients-popup__value">Кузьмин Михаил</span>
								</div>
							</div>
							<ul className="clients-popup__pagination">
								<li className="clients-popup__pagination-el active">1</li>
								<li className="clients-popup__pagination-el">2</li>
								<li className="clients-popup__pagination-el">3</li>
							</ul>
						</div>
					)}
					{activeTab === 3 && (
						<div className="clients-popup__statistics">
							<div className="clients-popup__row">
								<span className="clients-popup__criteria">Количество записей</span>
								<span className="clients-popup__value">30</span>
							</div>
							<div className="clients-popup__row">
								<span className="clients-popup__criteria">Общий доход</span>
								<span className="clients-popup__value">43 567₽</span>
							</div>
							<div className="clients-popup__row">
								<span className="clients-popup__criteria">Средний чек</span>
								<span className="clients-popup__value">2 500₽</span>
							</div>
							<div className="clients-popup__row">
								<span className="clients-popup__criteria">Последний визит</span>
								<span className="clients-popup__value">8</span>
							</div>
							<div className="clients-popup__row">
								<span className="clients-popup__criteria">Дни с последнего визита</span>
								<span className="clients-popup__value">12</span>
							</div>
						</div>
					)}
					{activeTab === 4 && (
						<div className="clients-popup__loyalty">
							<div className="clients-popup__loyalty-top">
								<span className="clients-popup__loyalty-text balance">Баланс: <span>1 235</span></span>
								<span className="clients-popup__loyalty-text sales">Скидка: <span>30%</span></span>
								<button className="clients-popup__loyalty-button">Изменить скидку</button>
								<button className="clients-popup__loyalty-add">
									<svg className="clients-popup__loyalty-icon" height="20" width="20">
										<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-add"/>
									</svg>
									Начислить
								</button>
								<button className="clients-popup__loyalty-substract">
									<svg className="clients-popup__loyalty-icon" height="20" width="20">
										<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-substract"/>
									</svg>
									Списать
								</button>
							</div>
							<span className="clients-popup__criteria operations">История операций</span>
							<div className="clients-popup__loyalty-operations">
								<span className="clients-popup__criteria">История операций</span>
								<div className="clients-popup__row">
									<span className="clients-popup__loyalty-name">Оплата услуги</span>
									<span className="clients-popup__loyalty-value"><span className="substract">-150</span> баллов</span>
								</div>
								<div className="clients-popup__row">
									<span className="clients-popup__loyalty-name">Начисление баллов</span>
									<span className="clients-popup__loyalty-value"><span className="add">+1 385</span> баллов</span>
								</div>
								<div className="clients-popup__row">
									<span className="clients-popup__loyalty-name">Начисление баллов</span>
									<span className="clients-popup__loyalty-value"><span className="add">+1 385</span> баллов</span>
								</div>
								<div className="clients-popup__row">
									<span className="clients-popup__loyalty-name">Оплата услуги</span>
									<span className="clients-popup__loyalty-value"><span className="substract">-150</span> баллов</span>
								</div>
								<div className="clients-popup__row">
									<span className="clients-popup__loyalty-name">Начисление баллов</span>
									<span className="clients-popup__loyalty-value"><span className="add">+1 385</span> баллов</span>
								</div>
								<div className="clients-popup__row">
									<span className="clients-popup__loyalty-name">Начисление баллов</span>
									<span className="clients-popup__loyalty-value"><span className="add">+1 385</span> баллов</span>
								</div>
								<div className="clients-popup__row">
									<span className="clients-popup__loyalty-name">Оплата услуги</span>
									<span className="clients-popup__loyalty-value"><span className="substract">-150</span> баллов</span>
								</div>
								<div className="clients-popup__row">
									<span className="clients-popup__loyalty-name">Начисление баллов</span>
									<span className="clients-popup__loyalty-value"><span className="add">+1 385</span> баллов</span>
								</div>
								<div className="clients-popup__row">
									<span className="clients-popup__loyalty-name">Начисление баллов</span>
									<span className="clients-popup__loyalty-value"><span className="add">+1 385</span> баллов</span>
								</div>
							</div>
						</div>
					)}
					{activeTab === 5 && (
						<div className="clients-popup__phone">
							<div className="clients-popup__row clients-popup__row--phone">
								<span className="clients-popup__criteria">История звонков</span>
								<span className="clients-popup__criteria">Время</span>
							</div>
							<div className="clients-popup__row">
								<div className="clients-popup__phone-left">
									<div className="clients-popup__phone-wrapper">
										<svg className="clients-popup__phone-icon" height="24" width="24">
											<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-phone"/>
										</svg>
									</div>
									<h6 className="clients-popup__phone-col">
										Михаил Кузьмин
										<span>Входящий звонок (2 мин.)</span>
									</h6>
								</div>
								<span className="clients-popup__criteria">21:00</span>
							</div>
							<div className="clients-popup__row">
								<div className="clients-popup__phone-left">
									<div className="clients-popup__phone-wrapper">
										<svg className="clients-popup__phone-icon" height="24" width="24">
											<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-phone"/>
										</svg>
									</div>
									<h6 className="clients-popup__phone-col">
										Михаил Кузьмин
										<span>Входящий звонок (2 мин.)</span>
									</h6>
								</div>
								<span className="clients-popup__criteria">Вчера</span>
							</div>
							<div className="clients-popup__row">
								<div className="clients-popup__phone-left">
									<div className="clients-popup__phone-wrapper">
										<svg className="clients-popup__phone-icon" height="24" width="24">
											<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-phone"/>
										</svg>
									</div>
									<h6 className="clients-popup__phone-col">
										Михаил Кузьмин
										<span>Входящий звонок (2 мин.)</span>
									</h6>
								</div>
								<span className="clients-popup__criteria">Среда</span>
							</div>
							<div className="clients-popup__row">
								<div className="clients-popup__phone-left">
									<div className="clients-popup__phone-wrapper">
										<svg className="clients-popup__phone-icon" height="24" width="24">
											<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-phone"/>
										</svg>
									</div>
									<h6 className="clients-popup__phone-col">
										Михаил Кузьмин
										<span>Входящий звонок (2 мин.)</span>
									</h6>
								</div>
								<span className="clients-popup__criteria">21:00</span>
							</div>
							<div className="clients-popup__row">
								<div className="clients-popup__phone-left">
									<div className="clients-popup__phone-wrapper">
										<svg className="clients-popup__phone-icon" height="24" width="24">
											<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-phone"/>
										</svg>
									</div>
									<h6 className="clients-popup__phone-col">
										Михаил Кузьмин
										<span>Входящий звонок (2 мин.)</span>
									</h6>
								</div>
								<span className="clients-popup__criteria">Вчера</span>
							</div>
							<div className="clients-popup__row">
								<div className="clients-popup__phone-left">
									<div className="clients-popup__phone-wrapper">
										<svg className="clients-popup__phone-icon" height="24" width="24">
											<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-phone"/>
										</svg>
									</div>
									<h6 className="clients-popup__phone-col">
										Михаил Кузьмин
										<span>Входящий звонок (2 мин.)</span>
									</h6>
								</div>
								<span className="clients-popup__criteria">Среда</span>
							</div>
							<div className="clients-popup__row">
								<div className="clients-popup__phone-left">
									<div className="clients-popup__phone-wrapper">
										<svg className="clients-popup__phone-icon" height="24" width="24">
											<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-phone"/>
										</svg>
									</div>
									<h6 className="clients-popup__phone-col">
										Михаил Кузьмин
										<span>Входящий звонок (2 мин.)</span>
									</h6>
								</div>
								<span className="clients-popup__criteria">21:00</span>
							</div>
							<div className="clients-popup__row">
								<div className="clients-popup__phone-left">
									<div className="clients-popup__phone-wrapper">
										<svg className="clients-popup__phone-icon" height="24" width="24">
											<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-phone"/>
										</svg>
									</div>
									<h6 className="clients-popup__phone-col">
										Михаил Кузьмин
										<span>Входящий звонок (2 мин.)</span>
									</h6>
								</div>
								<span className="clients-popup__criteria">Вчера</span>
							</div>
							<div className="clients-popup__row">
								<div className="clients-popup__phone-left">
									<div className="clients-popup__phone-wrapper">
										<svg className="clients-popup__phone-icon" height="24" width="24">
											<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-phone"/>
										</svg>
									</div>
									<h6 className="clients-popup__phone-col">
										Михаил Кузьмин
										<span>Входящий звонок (2 мин.)</span>
									</h6>
								</div>
								<span className="clients-popup__criteria">Среда</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};