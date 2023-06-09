const ModalAdmins = ({ closeModal }) => {

    return (
        <>
            <div className="modalAdmins" onClick={closeModal}>
            </div>

            <div className="modalAdmins__content">
                <div className="modalAdmins__content__close" onClick={closeModal}></div>

                <div className="modalAdmins__content__lastname">
                    <label htmlFor="lastname" className="modalAdmins__content__lastname__label">Nom</label>
                    <input type="txt" name="lastname" id="lastname" className="modalAdmins__content__lastname__input" />
                </div>

                <div className="modalAdmins__content__firstname">
                    <label htmlFor="firstname" className="modalAdmins__content__firstname__label">Prénom</label>
                    <input type="txt" name="firstname" id="firstname" className="modalAdmins__content__firstname__input" />
                </div>

                <div className="modalAdmins__content__email">
                    <label htmlFor="email" className="modalAdmins__content__email__label">Email</label>
                    <input type="txt" name="email" id="email" className="modalAdmins__content__email__input" />
                </div>

                <button className="modalAdmins__content__button">Confirmer</button>
            </div>
        </>
    )
}

export default ModalAdmins;