const ModalRegulation = ({ closeModal }) => {

    return (
        <>
            <div className="modalRegulation" onClick={closeModal}>
            </div>
            <div className="modalRegulation__content">
                <div className="modalRegulation__content__close" onClick={closeModal}></div>

                <div className="modalRegulation__content__title">
                    <label htmlFor="title" className="modalRegulation__content__title__label">Titre</label>
                    <input type="txt" name="title" id="title" className="modalRegulation__content__title__input" />
                </div>

                <div className="modalRegulation__content__link">
                    <label htmlFor="link" className="modalRegulation__content__link__label">Lien</label>
                    <input type="txt" name="link" id="link" className="modalRegulation__content__link__input" />
                </div>

                <button className="modalRegulation__content__button">Confirmer</button>

            </div>
        </>
    )
}

export default ModalRegulation;