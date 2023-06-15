const ModalAdmins = ({ closeModal }) => {

    return (
        <>
            <div className="modalAdmins" onClick={closeModal}>
            </div>

            <div className="modalAdmins__content">
                <div className="modalAdmins__content__close" onClick={closeModal}></div>

                <div className="modalAdmins__content__email">
                    <label htmlFor="email" className="modalAdmins__content__email__label">Email</label>
                    <input type="txt" name="email" id="email" className="modalAdmins__content__email__input" />
                </div>

                <div className="modalAdmins__content__password">
                    <label htmlFor="password" className="modalAdmins__content__password__label">Mot de Passe</label>
                    <input type="txt" name="password" id="password" className="modalAdmins__content__password__input" />
                </div>

                <div className="modalAdmins__content__verifPassword">
                    <label htmlFor="verifPassword" className="modalAdmins__content__verifPassword__label">Vérification du Mot de Passe</label>
                    <input type="txt" name="verifPassword" id="verifPassword" className="modalAdmins__content__verifPassword__input" />
                </div>

                <button className="modalAdmins__content__button">Confirmer</button>
            </div>
        </>
    )
}

export default ModalAdmins;