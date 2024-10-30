import { useNavigate } from "react-router-dom";

import { useRouteMeta } from "@/router";

import "./styles.scss";


export default function AsideMenuItem({ path, onChangePage, text, icon, isArrow, isSmall  }) {
	const { name } = useRouteMeta();
	const navigate = useNavigate();

	const onClickItem = () => {
		onChangePage(text);
		navigate(path);
	}


	return (
		<li onClick={onClickItem} className={`item ${name.includes(text) ? "active" : ""} ${isSmall ? "item--small" : ""}`}>
			<svg className="item__icon" height="25" width="25">
				<use xlinkHref={`/src/assets/icons/AsideMenu_Sprite.svg#icon-aside-menu-${icon}`}/>
			</svg>
			{ text }
			{isArrow && (
				<svg className="item__arrow" height="14" width="14">
					<use xlinkHref="/src/assets/icons/AsideMenu_Sprite.svg#icon-aside-menu-arrow"/>
				</svg>
			)}
		</li>
	);
};