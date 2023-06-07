const ModalClub = ({ closeModal }) => {

    return (
        <>
            <div className="modalClub" onClick={closeModal}>
            </div>
            <div className="modalClub__content">
                <div className="modalClub__content__close" onClick={closeModal}></div>

                <div className="modalClub__content__name">
                    <label htmlFor="name" className="modalClub__content__name__label">Nom</label>
                    <input type="text" name="name" id="name" className="modalClub__content__name__input" />
                </div>

                <div className="modalClub__content__town">
                    <label htmlFor="town" className="modalClub__content__town__label">Ville</label>
                    <input type="text" name="town" id="town" className="modalClub__content__town__input" />
                </div>

                <div className="modalClub__content__site">
                    <label htmlFor="site" className="modalClub__content__site__label">Site Internet</label>
                    <input type="text" name="site" id="site" className="modalClub__content__site__input" />
                </div>

                <div className="modalClub__content__president">
                    <label htmlFor="president" className="modalClub__content__president__label">Président</label>
                    <input type="text" name="president" id="president" className="modalClub__content__president__input" />
                </div>

                <div className="modalClub__content__tel">
                    <label htmlFor="tel" className="modalClub__content__tel__label">Téléphone</label>
                    <input type="tel" name="tel" id="tel" className="modalClub__content__tel__input" />
                </div>

                <div className="modalClub__content__members">
                    <label htmlFor="members" className="modalClub__content__members__label">Membres</label>
                    <input type="text" name="members" id="members" className="modalClub__content__members__input" />
                </div>
                
                <button className="modalClub__content__button">Envoyer</button>

            </div>
        </>
    )
}

export default ModalClub;