import React, { createContext, useState } from 'react';
import userService from '../services/userService';
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [key, setKey] = useState(0);
    const [isAuthenticated, setIsAuthenticated] = useState()

    const onReset = () => {
        setKey(prevKey => prevKey + 1);
    };

    const checkLogin = async () => {
        const authenticateUser = await userService.userAuthenticate()
        if( authenticateUser.data === true){
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false)
        }
    }

    return (
        <AppContext.Provider value={{ key, onReset, isAuthenticated, checkLogin }}>
            {children}
        </AppContext.Provider>
    );
};
