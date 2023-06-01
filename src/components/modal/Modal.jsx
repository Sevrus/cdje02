import { Link } from "react-router-dom";

const Modal = ({ closeModal }) => {

    return (
        <>
            <div className="modal" onClick={closeModal}>
            </div>
            <div className="modal__content">
                <div className="modal__content__close" onClick={closeModal}></div>

                <div className="modal__content__email">
                    <label htmlFor="email" className="modal__content__email__label">Email</label>
                    <input type="email" name="email" id="email" className="modal__content__email__input" />
                </div>

                <div className="modal__content__password">
                    <label htmlFor="password" className="modal__content__password__label">Mot de passe</label>
                    <input type="password" name="password" id="password" className="modal__content__password__input" />
                </div>

                <Link to="/admin">
                    <button className="modal__content__button">Se Connecter</button>
                </Link>
                
                <div className="modal__content__lost-password">Mot de passe oublié ?</div>
            </div>
        </>
    )
}

export default Modal;