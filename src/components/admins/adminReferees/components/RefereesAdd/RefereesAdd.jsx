import { useState } from "react";
import { Form } from "react-router-dom";
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay";

const RefereesAdd = () => {
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [validity, setValidity] = useState("");
    const [club, setClub] = useState("");

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/referees", {
            method: 'POST',
            body: JSON.stringify({
                name,
                title,
                validity,
                club
            }),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-type": "application/json"
              },
        })
            .then(resp => {
                if (resp.ok) {
                    setMessage(`La création de l'article est effectué`);
                    clearErrorAfterDelay(setMessage, 3000);
                } else {
                    setMessage(`La création de l'article a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la création de l'article.");
                }
            })
            .catch((error) => {
                console.log('Erreur lors de la requête.', error);
            })
    }
    return (

        <>

            <Form onSubmit={handleSubmit} className="addReferee">

                <div className="addReferee__name">
                    <label htmlFor="name">Nom</label>
                    <input type="text" name="name" maxLength={20} required={true} value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <div className="addReferee__validity">
                    <label htmlFor="lastname">Validité</label>
                    <input type="text" name="validity" placeholder="Année de fin de validité sous ce format : YYYY" maxLength={4} required={true} value={validity} onChange={(e) => setValidity(e.target.value)}/>
                </div>

                <div className="addReferee__type">
                    <label htmlFor="lastname">Type</label>
                    <input type="text" name="type" maxLength={100} required={true} value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div className="addReferee__club">
                    <label htmlFor="lastname">Club</label>
                    <input type="text" name="club" maxLength={100} required={true} value={club} onChange={(e) => setClub(e.target.value)}/>
                </div>

                <div className="addReferee__btn">
                    <button type="submit">Ajouter</button>
                </div>

                <p className="addAdmins__validate">{message}</p>

            </Form>

        </>

    )

}

export default RefereesAdd;