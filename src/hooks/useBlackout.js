import { useContext, useEffect } from "react";
import { appContext } from '../context';



export default function useBlackout(popup) {
	const { isActiveMenu, setIsActiveBlackout } = useContext(appContext);


	useEffect(() => {
		setIsActiveBlackout(isActiveMenu || popup.filter(Boolean).length > 0 ? true : false);
	}, [isActiveMenu, ...popup]);
}