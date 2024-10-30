import { useState } from "react";
import { useContext, Fragment } from "react";
import { useNavigate, useLocation } from "react-router-dom";



import AsideMenuItem from "@/components/AsideMenuItem";
import Calendar from "@/components/Calendar";

import "./styles.scss";
import { appContext } from "../../context";


export default function AsideMenu({ isHidden }) {
	const { isActiveMenu, setIsActiveMenu, setIsActiveBlackout } = useContext(appContext);

	const [isActive, setIsActive] = useState(false);
	const [isSmall, setIsSmall] = useState(false);
	const [activeItem, setActiveItem] = useState("");

	const navigate = useNavigate();
	const location = useLocation();

	const items = [
		{
			path: "/",
			text: "Учёт записей",
			icon: "1",
			isArrow: true
		},
		{
			path: "/staff",
			text: "Сотрудники",
			icon: "2",
			isArrow: false
		},
		{
			path: "/clients",
			text: "Клиенты",
			icon: "3",
			isArrow: true
		},
		{
			path: "/analytics",
			text: "Аналитика",
			icon: "4",
			isArrow: false
		},
		{
			path: "/online",
			text: "Онлайн запись",
			icon: "5",
			isArrow: true
		},
		{
			path: "/finances",
			text: "Финансы",
			icon: "6",
			isArrow: true
		},
		{
			path: "/services",
			text: "Услуги",
			icon: "7",
			isArrow: true
		},
		{
			path: "/notifications",
			text: "Уведомления",
			icon: "8",
			isArrow: false
		},
		{
			path: "/store",
			text: "Склад",
			icon: "9",
			isArrow: true
		},
		{
			path: "/tariffs",
			text: "Тарифы",
			icon: "10",
			isArrow: true
		},
		{
			path: "/log",
			text: "Лог действий",
			icon: "11",
			isArrow: true
		},
		{
			path: "/settings",
			text: "Настройки",
			icon: "12",
			isArrow: false
		},
		{
			path: "/support",
			text: "Поддержка",
			icon: "13",
			isArrow: true
		}
	];

	const renderSubMenu = (text) => {
		if (text === "Учёт записей") return (
			<li className={`aside-menu__info info ${ (activeItem === "Учёт записей" && !isSmall) ? "active" : "" }`}>
				<Calendar/>
				<button className="info__button sales">Оформить продажу</button>
				<button onClick={ () => setIsActive(prev => !prev) } className="info__button analytics">
					Аналитика за сутки
					<svg className="info__button-icon" height="14" width="14">
						<use xlinkHref="/src/assets/icons/AsideMenu_Sprite.svg#icon-aside-menu-arrow"/>
					</svg>
				</button>
				<ul className={ `info__statistics ${ isActive ? "active" : "" }` }>
					<li className="info__statistics-el">Общий заработок <span>0 ₽</span></li>
					<li className="info__statistics-el">Оказано услуг <span>0 ₽</span></li>
					<li className="info__statistics-el">Продано товаров <span>0 ₽</span></li>
					<li className="info__statistics-el">Наличными <span>0 ₽</span></li>
					<li className="info__statistics-el">Безналичными <span>0 ₽</span></li>
				</ul>
			</li>
		);

		if (text === "Клиенты") return (
			<li className={`aside-menu__clients clients-menu ${ (activeItem === "Клиенты" && !isSmall) ? "active" : "" }`}>
				<ul className="clients-menu__list">
					<li onClick={ () => navigate("/clients") } className={`clients-menu__list-el ${location.pathname === "/clients" ? "active" : ""}`}>Список клиентов</li>
					<li className="clients-menu__list-el">Телефония</li>
					<li className="clients-menu__list-el">SMS рассылка</li>
					<li className="clients-menu__list-el">Промокоды</li>
					<li className="clients-menu__list-el">Отзывы</li>
					<li className="clients-menu__list-el">Лояльность</li>
					<li className="clients-menu__list-el">Возвращаемость</li>
				</ul>
			</li>
		)

		if (text === "Услуги") return (
			<li className={`aside-menu__clients clients-menu ${ (activeItem === "Услуги" && !isSmall) ? "active" : "" }`}>
				<ul className="clients-menu__list">
					<li onClick={ () => navigate("/services") } className={`clients-menu__list-el ${location.pathname === "/services" ? "active" : ""}`}>Список услуг</li>
					<li onClick={ () => navigate("/products") } className={`clients-menu__list-el ${location.pathname === "/products" ? "active" : ""}`}>Список товаров</li>
				</ul>
			</li>
		)
	}

	const changeActiveItem = (text) => setActiveItem(activeItem === text ? "" : text); 

	const onChangeMenu = () => {
		if (window.matchMedia("(max-width: 1100px)").matches) {
			setIsActiveMenu();
			setIsActiveBlackout();
		} else {
			setIsSmall(prev => !prev);
		}
	} 
	

	return (
		<>
			{!isHidden && (
				<aside className={ `aside-menu ${ isActiveMenu ? "active" : "" } ${isSmall ? "small" : ""}` }>
					<h1 className="aside-menu__title">
						<svg className="aside-menu__title-logo" height="19" width="118">
							<use xlinkHref="/src/assets/icons/AsideMenu_Sprite.svg#icon-aside-menu-logo"/>
						</svg>
						<svg onClick={onChangeMenu} className="aside-menu__title-icon" height="18" width="18">
							<use xlinkHref="/src/assets/icons/AsideMenu_Sprite.svg#icon-aside-menu-toggler"/>
						</svg>
					</h1>
					<span className="aside-menu__subtitle">Панель инструментов</span>
					<ul className="aside-menu__list aside-menu__list--main">
						{items.slice(0, 11).map(item => (
							<Fragment key={ item.icon }>
								<AsideMenuItem onChangePage={ changeActiveItem } { ...item } isSmall={ isSmall }/>
								{item.isArrow && renderSubMenu(item.text)}
							</Fragment>
						))}
					</ul>
					<span className="aside-menu__subtitle">Дополнительное</span>
					<ul className="aside-menu__list">
						{items.slice(11).map(item => (
							<Fragment key={ item.icon }>
								<AsideMenuItem onChangePage={ changeActiveItem } { ...item } isSmall={ isSmall }/>
								{item.isArrow && renderSubMenu(item.text)}
							</Fragment>
						))}
					</ul>
				</aside>
			)}
		</>
	);
};