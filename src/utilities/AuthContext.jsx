import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
    checkAuthenticationStatus: () => {},
    handleBeforeUnload: () => {},
});

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        setIsLoggedIn(true);
    };

    const logout = () => {
        setIsLoggedIn(false);
    };

    const checkAuthenticationStatus = () => {
        const storedIsLoggedIn = localStorage.getItem('isLoggedIn');
        if (storedIsLoggedIn) {
            setIsLoggedIn(JSON.parse(storedIsLoggedIn));
        }
    };

    const handleBeforeUnload = () => {
        localStorage.setItem('isLoggedIn', JSON.stringify(isLoggedIn));
    };

    useEffect(() => {
        checkAuthenticationStatus();
    }, []);

    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [handleBeforeUnload]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout, checkAuthenticationStatus, handleBeforeUnload }}>
            {children}
        </AuthContext.Provider>
    );
};

