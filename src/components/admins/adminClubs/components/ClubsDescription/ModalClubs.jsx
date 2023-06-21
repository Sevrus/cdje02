import { useEffect, useState } from "react";
import { fetchForAll } from "../../../../../utilities/functionFetch"
import { Form, useParams } from "react-router-dom";

const ModalClubs = ({ closeModal }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);
    const [initialDatas, setInitialDatas] = useState([]);
    const { id } = useParams();

    const handleNameChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, name: value }))
    }

    const handleCityChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, city: value }))
    }

    const handlePresidentChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, president: value }))
    }

    const handleTelChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, tel: value }))
    }

    const handleSiteChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, site: value }))
    }

    const handleMembersChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, members: value }))
    }

    const handleCoordxChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, coordx: value }))
    }

    const handleCoordyChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, coordy: value }))
    }

    const handleDateChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, created: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/clubs/" + id, {
            method: 'PUT', body: JSON.stringify(datas)
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(`La mise à jour du club est effectué`)
                    setDatas(datas);
                } else {
                    console.log(`La mise à jour du club a échoué.`);
                    throw new Error("Erreur lors de la mise à jour du club.");
                }
            })
    }

    useEffect(() => {
        fetchForAll(setIsLoaded, setError, setInitialDatas, "api/clubs")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (
            <>
                <div className="modalClub" onClick={closeModal}>
                </div>

                {initialDatas.data.map(item => (
                    <Form className="modalClub__content" key={item.id} onSubmit={handleSubmit}>
                        <div className="modalClub__content__close" onClick={closeModal}></div>

                        <div className="modalClub__content__name">
                            <label htmlFor="name" className="modalClub__content__name__label">Nom</label>
                            <input type="text" name="name" id="name" className="modalClub__content__name__input" value={datas.name || item.name} onChange={handleNameChange} />
                        </div>

                        <div className="modalClub__content__town">
                            <label htmlFor="town" className="modalClub__content__town__label">Ville</label>
                            <input type="text" name="town" id="town" className="modalClub__content__town__input" value={datas.city || item.city} onChange={handleCityChange} />
                        </div>

                        <div className="modalClub__content__site">
                            <label htmlFor="site" className="modalClub__content__site__label">Site Internet</label>
                            <input type="text" name="site" id="site" className="modalClub__content__site__input" value={datas.site || item.site} onChange={handleSiteChange} />
                        </div>

                        <div className="modalClub__content__president">
                            <label htmlFor="president" className="modalClub__content__president__label">Président</label>
                            <input type="text" name="president" id="president" className="modalClub__content__president__input" value={datas.president || item.president} onChange={handlePresidentChange} />
                        </div>

                        <div className="modalClub__content__tel">
                            <label htmlFor="tel" className="modalClub__content__tel__label">Téléphone</label>
                            <input type="tel" name="tel" id="tel" className="modalClub__content__tel__input" value={datas.tel || item.tel} onChange={handleTelChange} />
                        </div>

                        <div className="modalClub__content__members">
                            <label htmlFor="members" className="modalClub__content__members__label">Membres</label>
                            <input type="text" name="members" id="members" className="modalClub__content__members__input" value={datas.members || item.members} onChange={handleMembersChange} />
                        </div>

                        <div className="modalClub__content__coordx">
                            <label htmlFor="coordx" className="modalClub__content__coordx__label">Coordonnée X</label>
                            <input type="text" name="coordx" id="coordx" className="modalClub__content__coordx__input" value={datas.coordx || item.coordx} onChange={handleCoordxChange} />
                        </div>

                        <div className="modalClub__content__coordy">
                            <label htmlFor="coordy" className="modalClub__content__coordy__label">Coordonnée Y</label>
                            <input type="text" name="coordy" id="coordy" className="modalClub__content__coordy__input" value={datas.coordy || item.coordy} onChange={handleCoordyChange} />
                        </div>

                        <div className="modalClub__content__date">
                            <label htmlFor="date" className="modalClub__content__date__label">Date</label>
                            <input type="date" name="date" id="date" className="modalClub__content__date__input" value={datas.created || item.created} onChange={handleDateChange} />
                        </div>

                        <button className="modalClub__content__button">Confirmer</button>

                    </Form>
                ))}
            </>
        )
    }
}

export default ModalClubs;