import { useState } from "react";
import { Form } from "react-router-dom";
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay.js";

const ModalClubs = ({ closeModal, clubData }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const [name, setName] = useState(clubData.name);
    const [city, setCity] = useState(clubData.city);
    const [president, setPresident] = useState(clubData.president);
    const [tel, setTel] = useState(clubData.tel);
    const [site, setSite] = useState(clubData.site);
    const [members, setMembers] = useState(clubData.members);
    const [coordx, setCoordx] = useState(clubData.coordx);
    const [coordy, setCoordy] = useState(clubData.coordy);

    const [message, setMessage] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoaded(true);

        const updatedData = {
            name: name,
            city: city,
            president: president,
            tel: tel,
            site: site,
            members: members,
            coordx: coordx,
            coordy: coordy
        };

        fetch("http://localhost:3000/api/clubs/" + clubData.id, {
            method: 'PUT',
            body: JSON.stringify(updatedData),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-type": "application/json"
            },
        })
            .then(resp => {
                setIsLoaded(false);
                if (resp.ok) {
                    setMessage(`Le club a bien été modifié.`);
                    setTimeout(() => {
                        setMessage(null);
                        location.reload();
                    }, 3000);
                } else {
                    setMessage(`La modification du club a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la modification du club.");
                }
            })
            .catch(error => {
                setIsLoaded(false);
                setError(error.message);
            })
    }

        return (
            <>
                <div className="modalClub" onClick={closeModal}>
                </div>

                    <Form className="modalClub__content" onSubmit={handleSubmit}>
                        <div className="modalClub__content__close" onClick={closeModal}></div>

                        <div className="modalClub__content__name">
                            <label htmlFor="name" className="modalClub__content__name__label">Nom</label>
                            <input type="text" name="name" id="name" className="modalClub__content__name__input" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="modalClub__content__town">
                            <label htmlFor="town" className="modalClub__content__town__label">Ville</label>
                            <input type="text" name="town" id="town" className="modalClub__content__town__input" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>

                        <div className="modalClub__content__site">
                            <label htmlFor="site" className="modalClub__content__site__label">Site Internet</label>
                            <input type="text" name="site" id="site" className="modalClub__content__site__input" value={site} onChange={(e) => setSite(e.target.value)} />
                        </div>

                        <div className="modalClub__content__president">
                            <label htmlFor="president" className="modalClub__content__president__label">Président</label>
                            <input type="text" name="president" id="president" className="modalClub__content__president__input" value={president} onChange={(e) => setPresident(e.target.value)} />
                        </div>

                        <div className="modalClub__content__tel">
                            <label htmlFor="tel" className="modalClub__content__tel__label">Téléphone</label>
                            <input type="tel" name="tel" id="tel" className="modalClub__content__tel__input" value={tel} onChange={(e) => setTel(e.target.value)} />
                        </div>

                        <div className="modalClub__content__members">
                            <label htmlFor="members" className="modalClub__content__members__label">Membres</label>
                            <input type="text" name="members" id="members" className="modalClub__content__members__input" value={members} onChange={(e) => setMembers(e.target.value)} />
                        </div>

                        <div className="modalClub__content__coordx">
                            <label htmlFor="coordx" className="modalClub__content__coordx__label">Latitude</label>
                            <input type="text" name="coordx" id="coordx" className="modalClub__content__coordx__input" value={coordx} onChange={(e) => setCoordx(e.target.value)} />
                        </div>

                        <div className="modalClub__content__coordy">
                            <label htmlFor="coordy" className="modalClub__content__coordy__label">Longitude</label>
                            <input type="text" name="coordy" id="coordy" className="modalClub__content__coordy__input" value={coordy} onChange={(e) => setCoordy(e.target.value)} />
                        </div>

                        <button disabled={isLoaded} type="submit" className="modalClub__content__button">{isLoaded ? "En Cours..." : "Confirmer"}</button>

                        <p className="modalClub__content__message">{message}</p>
                        
                    </Form>
            </>
        )
    }

export default ModalClubs;