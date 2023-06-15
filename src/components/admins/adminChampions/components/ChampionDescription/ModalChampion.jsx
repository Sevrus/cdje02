const ModalChampion = ({ closeModal }) => {

    return (
        <>
            <div className="modalChampion" onClick={closeModal}>
            </div>
            <div className="modalChampion__content">
                <div className="modalChampion__content__close" onClick={closeModal}></div>

                <div className="modalChampion__content__name">
                    <label htmlFor="name" className="modalChampion__content__name__label">Nom</label>
                    <input type="txt" name="name" id="name" className="modalChampion__content__name__input" />
                </div>

                <div className="modalChampion__content__year">
                    <label htmlFor="year" className="modalChampion__content__year__label">Année</label>
                    <input type="txt" name="year" id="year" className="modalChampion__content__year__input" />
                </div>

                <button className="modalChampion__content__button">Confirmer</button>

            </div>
        </>
    )
}

export default ModalChampion;