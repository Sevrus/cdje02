const ModalArticle = ({ closeModal }) => {

    return (
        <>
            <div className="modalArticle" onClick={closeModal}>
            </div>
            <div className="modalArticle__content">
                <div className="modalArticle__content__close" onClick={closeModal}></div>

                <div className="modalArticle__content__title">
                    <label htmlFor="title" className="modalArticle__content__title__label">Titre</label>
                    <input type="text" name="title" id="title" className="modalArticle__content__title__input" />
                </div>

                <div className="modalArticle__content__author">
                    <label htmlFor="author" className="modalArticle__content__author__label">Auteur</label>
                    <input type="text" name="author" id="author" className="modalArticle__content__author__input" />
                </div>

                <div className="modalArticle__content__description">
                    <label htmlFor="description" className="modalArticle__content__description__label">Description</label>
                    <textarea type="" name="description" id="description" className="modalArticle__content__description__input" />
                </div>

                <div className="modalArticle__content__date">
                    <label htmlFor="date" className="modalArticle__content__date__label">Date</label>
                    <input type="date" name="date" id="date" className="modalArticle__content__date__input" />
                </div>

                <button className="modalArticle__content__button">Envoyer</button>

            </div>
        </>
    )
}

export default ModalArticle;