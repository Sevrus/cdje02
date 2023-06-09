const ModalReferees = ({ closeModal }) => {

    return (
        <>
            <div className="modalReferees" onClick={closeModal}>
            </div>
            <div className="modalReferees__content">
                <div className="modalReferees__content__close" onClick={closeModal}></div>

                <div className="modalReferees__content__name">
                    <label htmlFor="name" className="modalReferees__content__name__label">Nom</label>
                    <input type="txt" name="name" id="name" className="modalReferees__content__name__input" />
                </div>

                <div className="modalReferees__content__firstname">
                    <label htmlFor="firstname" className="modalReferees__content__firstname__label">Prénom</label>
                    <input type="txt" name="firstname" id="firstname" className="modalReferees__content__firstname__input" />
                </div>

                <div className="modalReferees__content__validity">
                    <label htmlFor="validity" className="modalReferees__content__validity__label">Validité</label>
                    <input type="txt" name="validity" id="validity" className="modalReferees__content__validity__input" />
                </div>

                <div className="modalReferees__content__type">
                    <label htmlFor="type" className="modalReferees__content__type__label">Type</label>
                    <input type="txt" name="type" id="type" className="modalReferees__content__type__input" />
                </div>

                <div className="modalReferees__content__club">
                    <label htmlFor="club" className="modalReferees__content__club__label">Club</label>
                    <input type="txt" name="club" id="club" className="modalReferees__content__club__input" />
                </div>

                <button className="modalReferees__content__button">Confirmer</button>

            </div>
        </>
    )
}

export default ModalReferees;