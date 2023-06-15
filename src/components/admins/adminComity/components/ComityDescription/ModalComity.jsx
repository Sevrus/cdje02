const ModalComity = ({ closeModal }) => {

    return (
        <>
            <div className="modalComity" onClick={closeModal}>
            </div>
            <div className="modalComity__content">
                <div className="modalComity__content__close" onClick={closeModal}></div>

                <div className="modalComity__content__job">
                    <label htmlFor="job" className="modalComity__content__job__label">Poste</label>
                    <input type="txt" name="job" id="job" className="modalComity__content__job__input" />
                </div>

                <div className="modalComity__content__lastname">
                    <label htmlFor="lastname" className="modalComity__content__lastname__label">Nom</label>
                    <input type="txt" name="lastname" id="lastname" className="modalComity__content__lastname__input" />
                </div>

                <div className="modalComity__content__firstname">
                    <label htmlFor="firstname" className="modalComity__content__firstname__label">Prénom</label>
                    <input type="txt" name="firstname" id="firstname" className="modalComity__content__firstname__input" />
                </div>

                <div className="modalComity__content__email">
                    <label htmlFor="email" className="modalComity__content__email__label">Email</label>
                    <input type="email" name="email" id="email" className="modalComity__content__email__input" />
                </div>

                <div className="modalComity__content__image">
                    <label htmlFor="image" className="modalComity__content__image__label">Image</label>
                    <input type="txt" name="image" id="image" className="modalComity__content__image__input" />
                </div>

                <div className="modalComity__content__alt">
                    <label htmlFor="alt" className="modalComity__content__alt__label">Alt</label>
                    <input type="txt" name="alt" id="alt" className="modalComity__content__alt__input" />
                </div>

                <button className="modalComity__content__button">Confirmer</button>

            </div>
        </>
    )
}

export default ModalComity;