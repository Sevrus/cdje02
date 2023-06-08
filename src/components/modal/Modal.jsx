import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ closeModal }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, password);
        closeModal();
        navigate('/admin');
    }

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    return (
        <>
            <div className="modal" onClick={closeModal}>
            </div>

            <form className="modal__content" onSubmit={handleSubmit}>
                <div className="modal__content__close" onClick={closeModal}></div>

                <div className="modal__content__email">
                    <label className="modal__content__email__label" htmlFor="email" >Email</label>
                    <input className="modal__content__email__input" type="email" name="email" id="email" 
                        value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="modal__content__password">
                    <label className="modal__content__password__label" htmlFor="password">Mot de passe</label>
                    <input className="modal__content__password__input" type="password" name="password" id="password" 
                        value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button type="submit" className="modal__content__button"
                    onClick={handleLogin}>Se Connecter</button>

                <div className="modal__content__lost-password">Mot de passe oublié ?</div>
            </form>
        </>
    )
}

export default Modal;