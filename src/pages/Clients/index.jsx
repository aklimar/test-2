import { useState, useContext, useEffect } from "react";
import "./styles.scss";
import ClientsHeader from './../../components/ClientsHeader/index';
import Client from './../../components/Client/index';
import ClientsAddForm from './../../components/ClientsAddForm/index';
import ClientsPopup from './../../components/ClientsPopup/index';
import useBlackout from './../../hooks/useBlackout';
import { appContext } from './../../context';
import { mockClientData } from './../../api/mockClientData';

export default function Clients() {
	const { setIsActiveMenu } = useContext(appContext);
	const [isAddFormVisible, setIsAddFormVisible] = useState(false);
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const [clients, setClients] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [clientsPerPage, setClientsPerPage] = useState(3); // Состояние для количества клиентов на странице

	useBlackout([isAddFormVisible, isPopupVisible]);

	useEffect(() => {
		const fetchClients = () => {
			setTimeout(() => {
				if (mockClientData.status) {
					setClients(mockClientData.data.Clients);
				}
			}, 1000);
		};

		fetchClients();
	}, []);

	const indexOfLastClient = currentPage * clientsPerPage;
	const indexOfFirstClient = indexOfLastClient - clientsPerPage;
	const currentClients = clients.slice(indexOfFirstClient, indexOfLastClient);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	const totalPages = Math.ceil(clients.length / clientsPerPage);

	return (
		<>
			<ClientsHeader setIsPopup={setIsAddFormVisible} setIsVisible={setIsActiveMenu} />
			<div className="clients">
				<div className="clients__container scrollbar">
					<div className="clients__table">
						<div className="clients__table-row">
							<span className="clients__table-header">Клиент</span>
							<span className="clients__table-header">Визиты</span>
							<span className="clients__table-header">Оплачено</span>
							<span className="clients__table-header">Средний чек</span>
							<span className="clients__table-header">Последний визит</span>
							<span className="clients__table-header">День рождения</span>
						</div>
						{currentClients.map((client) => (
							<Client
								checkMore={() => setIsPopupVisible(prev => !prev)}
								key={client.clientid}
								name={`${client.name} ${client.surname}`}
								phone={client.phone}
								visits={client.visits}
								lastVisit={new Date(client.lastvisit).toLocaleDateString("ru-RU")}
								payed={client.Info?.Stats[0]?.sum}
								averageCheck={client.Info?.Stats[0]?.AverageCheck}
								date={new Date(client.dateCreated).toLocaleDateString("ru-RU")}
							/>
						))}
					</div>
				</div>
				<div className="clients__pagination">
					<select
						className="clients-per-page-select" // Добавьте класс для стилей
						value={clientsPerPage}
						onChange={(e) => {
							setClientsPerPage(Number(e.target.value));
							setCurrentPage(1); // Сбросить текущую страницу на 1 при изменении клиентов на странице
						}}
					>
						<option value={3}>3</option>
						<option value={6}>6</option>
						<option value={12}>12</option>
					</select>
					<button
						className="clients__pagination-arrow left"
						onClick={() => paginate(currentPage - 1)}
						disabled={currentPage === 1}
					>
						<svg className="clients__pagination-icon" height="17" width="17">
							<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-arrow-left" />
						</svg>
					</button>
					{Array.from({ length: totalPages }, (_, index) => (
						<button
							key={index + 1}
							className={`clients__pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
							onClick={() => paginate(index + 1)}
						>
							{index + 1}
						</button>
					))}
					<button
						className="clients__pagination-arrow right"
						onClick={() => paginate(currentPage + 1)}
						disabled={currentPage === totalPages}
					>
						<svg className="clients__pagination-icon" height="17" width="17">
							<use xlinkHref="/src/assets/icons/Clients_Sprite.svg#icon-clients-arrow-right" />
						</svg>
					</button>
				</div>
			</div>
			<button onClick={() => setIsAddFormVisible(prev => !prev)} className="clients__add">
				<svg className="clients__add-icon" height="24" width="24">
					<use xlinkHref="/src/assets/icons/Header_Sprite.svg#icon-header-add" />
				</svg>
				Добавить клиента
			</button>

			<ClientsAddForm isVisible={isAddFormVisible} setIsVisible={setIsAddFormVisible} />
			<ClientsPopup isVisible={isPopupVisible} setIsVisible={setIsPopupVisible} />
		</>
	);
}
