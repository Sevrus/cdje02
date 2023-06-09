const ModalResult = ({ closeModal }) => {

    return (
        <>
            <div className="modalResult" onClick={closeModal}>
            </div>
            <div className="modalResult__content">
                <div className="modalResult__content__close" onClick={closeModal}></div>

                <div className="modalResult__content__title">
                    <label htmlFor="title" className="modalResult__content__title__label">Titre</label>
                    <input type="txt" name="title" id="title" className="modalResult__content__title__input" />
                </div>

                <div className="modalResult__content__link">
                    <label htmlFor="link" className="modalResult__content__link__label">Lien</label>
                    <input type="txt" name="link" id="link" className="modalResult__content__link__input" />
                </div>

                <button className="modalResult__content__button">Confirmer</button>

            </div>
        </>
    )
}

export default ModalResult;