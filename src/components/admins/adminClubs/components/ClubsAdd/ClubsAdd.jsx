import { useEffect, useState } from "react";
import { Form } from "react-router-dom";
import { fetchForAll } from "../../../../../utilities/functionFetch"

const ClubsAdd = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/clubs/", {
            method: 'POST', body: JSON.stringify(datas)
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(`La création du club est effectué`)
                    setDatas(resp);
                } else {
                    console.log(`La création du club a échoué.`);
                    throw new Error("Erreur lors de la création du club.");
                }
            })
    }

    useEffect(() => {
        fetchForAll(setIsLoaded, setError, setDatas, "api/clubs")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (

            <>

                <Form onSubmit={handleSubmit} className="addClub">

                    <div className="addClub__name">
                        <label htmlFor="lastname">Nom</label>
                        <input type="text" name="name" maxLength={20} required={true} />
                    </div>

                    <div className="addClub__town">
                        <label htmlFor="town">Ville</label>
                        <input type="text" name="town" maxLength={50} required={true} />
                    </div>

                    <div className="addClub__site">
                        <label htmlFor="site">Site Internet</label>
                        <input type="text" name="site" maxLength={50} required={true} />
                    </div>

                    <div className="addClub__president">
                        <label htmlFor="president">Président</label>
                        <input type="text" name="president" maxLength={50} required={true} />
                    </div>

                    <div className="addClub__tel">
                        <label htmlFor="tel">Téléphone</label>
                        <input type="text" name="tel" maxLength={50} required={true} />
                    </div>

                    <div className="addClub__members">
                        <label htmlFor="members">Membres</label>
                        <input type="text" name="members" maxLength={3} required={true} />
                    </div>

                    <div className="addClub__coordx">
                        <label htmlFor="coordx">Coordonnée X</label>
                        <input type="text" name="coordx" maxLength={25} required={true} />
                    </div>

                    <div className="addClub__coordy">
                        <label htmlFor="coordy">Coordonnée Y</label>
                        <input type="text" name="coordy" maxLength={25} required={true} />
                    </div>

                    <div className="addClub__btn">
                        <button>Ajouter</button>
                    </div>

                </Form>

            </>

        )
    }
}

export default ClubsAdd;