import { useState } from "react";
import { Form } from "react-router-dom";
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay";
import { ReloadAfterDelay } from "../../../../../utilities/ReloadAfterDelay";

const ClubsAdd = () => {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [president, setPresident] = useState("");
    const [tel, setTel] = useState("");
    const [site, setSite] = useState("");
    const [members, setMembers] = useState("");
    const [coordx, setCoordx] = useState("");
    const [coordy, setCoordy] = useState("");

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/clubs/", {
            method: 'POST', 
            body: JSON.stringify({
                name,
                city,
                president,
                tel,
                site,
                members,
                coordx,
                coordy
            }),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-type": "application/json"
              },
        })
            .then(resp => {
                if (resp.ok) {
                    setMessage(`Le club a bien été créé.`);
                    ReloadAfterDelay(setMessage, 3000);
                } else {
                    setMessage(`La création du club a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la création du club.");
                }
            })
            .catch((error) => {
                console.log('Erreur lors de la requête.', error);
            })
    }

        return (

            <>

                <Form onSubmit={handleSubmit} className="addClub">

                    <div className="addClub__name">
                        <label htmlFor="lastname">Nom</label>
                        <input type="text" name="name" maxLength={20} required={true} value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="addClub__town">
                        <label htmlFor="town">Ville</label>
                        <input type="text" name="town" maxLength={50} required={true} value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>

                    <div className="addClub__site">
                        <label htmlFor="site">Site Internet</label>
                        <input type="url" name="site" maxLength={50} required={true} value={site} onChange={(e) => setSite(e.target.value)} />
                    </div>

                    <div className="addClub__president">
                        <label htmlFor="president">Président</label>
                        <input type="text" name="president" maxLength={50} required={true} value={president} onChange={(e) => setPresident(e.target.value)}/>
                    </div>

                    <div className="addClub__tel">
                        <label htmlFor="tel">Téléphone</label>
                        <input type="text" name="tel" maxLength={50} required={true} value={tel} onChange={(e) => setTel(e.target.value)}/>
                    </div>

                    <div className="addClub__members">
                        <label htmlFor="members">Nombre de Membres</label>
                        <input type="number" name="members" maxLength={3} required={true} value={members} placeholder="Nombre de membres dans le club" onChange={(e) => setMembers(e.target.value)}/>
                    </div>

                    <div className="addClub__coordx">
                        <label htmlFor="coordx">Latitude</label>
                        <input type="number" name="coordx" maxLength={25} required={true} value={coordx} placeholder="Coordonnée GPS X du club" onChange={(e) => setCoordx(e.target.value)} />
                    </div>

                    <div className="addClub__coordy">
                        <label htmlFor="coordy">Longitude</label>
                        <input type="number" name="coordy" maxLength={25} required={true} value={coordy} placeholder="Coordonnée GPS Y du club" onChange={(e) => setCoordy(e.target.value)} />
                    </div>

                    <div className="addClub__btn">
                        <button type="submit">Ajouter</button>
                    </div>

                    <p className="addClub__message">{message}</p>
                    
                </Form>

            </>

        )
    }

export default ClubsAdd;