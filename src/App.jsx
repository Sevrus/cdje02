import { useContext, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import { AuthContext, AuthProvider } from './utilities/AuthContext.jsx';

const App = () => {
    const { isLoggedIn, checkAuthenticationStatus, handleBeforeUnload } = useContext(AuthContext);

    useEffect(() => {
        checkAuthenticationStatus();
    }, [checkAuthenticationStatus]);

    useEffect(() => {
        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [handleBeforeUnload]);

    return (
        <AuthProvider>
            <Header />
            <div className="main">
                <Outlet />
            </div>
            <Footer />
        </AuthProvider>
    );
};

export default App;