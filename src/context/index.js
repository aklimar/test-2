import React, { createContext, useState } from "react";

// Создание контекста
export const appContext = createContext();

// Провайдер контекста
export const AppProvider = ({ children }) => {
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const [isActiveBlackout, setIsActiveBlackout] = useState(false);

    return (
        <appContext.Provider value={{ isActiveMenu, setIsActiveMenu, isActiveBlackout, setIsActiveBlackout }}>
            {children}
        </appContext.Provider>
    );
};
