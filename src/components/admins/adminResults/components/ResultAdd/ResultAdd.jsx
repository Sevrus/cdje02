import { useState } from "react";
import { Form } from "react-router-dom";
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay";

const ResultAdd = () => {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/tournaments", {
            method: 'POST',
            body: JSON.stringify({
                title,
                link
            }),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-type": "application/json"
              },
        })
            .then(resp => {
                if (resp.ok) {
                    setMessage(`La création du tournoi est effectué`);
                    clearErrorAfterDelay(setMessage, 3000);
                } else {
                    setMessage(`La création du tournoi a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la création du tournoi.");
                }
            })
            .catch((error) => {
                console.log('Erreur lors de la requête.', error);
            })
    }

    return (

        <>

            <Form onSubmit={handleSubmit} className="addResult">

                <div className="addResult__title">
                    <label htmlFor="title">Titre</label>
                    <input type="text" name="title" maxLength={50} required={true} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="addResult__link">
                    <label htmlFor="link">Lien</label>
                    <input type="text" name="link" maxLength={50} required={true} value={link} onChange={(e) => setLink(e.target.value)} />
                </div>

                <div className="addResult__btn">
                    <button type="submit">Ajouter</button>
                </div>

                <p className="addAdmins__validate">{message}</p>
                
            </Form>

        </>

    )

}

export default ResultAdd;