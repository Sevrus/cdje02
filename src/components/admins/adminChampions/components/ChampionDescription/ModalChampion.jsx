const ModalChampion = ({ closeModal }) => {

    return (
        <>
            <div className="modalChampion" onClick={closeModal}>
            </div>
            <div className="modalChampion__content">
                <div className="modalChampion__content__close" onClick={closeModal}></div>

                <div className="modalChampion__content__name">
                    <label htmlFor="name" className="modalChampion__content__name__label">Nom</label>
                    <input type="name" name="name" id="name" className="modalChampion__content__name__input" />
                </div>

                <div className="modalChampion__content__firstname">
                    <label htmlFor="firstname" className="modalChampion__content__firstname__label">Prénom</label>
                    <input type="firstname" name="firstname" id="firstname" className="modalChampion__content__firstname__input" />
                </div>

                <div className="modalChampion__content__year">
                    <label htmlFor="year" className="modalChampion__content__year__label">Année</label>
                    <input type="year" name="year" id="year" className="modalChampion__content__year__input" />
                </div>

                <button className="modalChampion__content__button">Envoyer</button>

            </div>
        </>
    )
}

export default ModalChampion;