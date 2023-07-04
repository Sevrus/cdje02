import { useState } from "react";
import { Form } from "react-router-dom";
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay";

const RegulationAdd = () => {
    const [title, setTitle] = useState("");
    const [link, setLink] = useState("");

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/regulations", {
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
                    setMessage(`La création du réglement est effectué`);
                    clearErrorAfterDelay(setMessage, 3000);
                } else {
                    setMessage(`La création du réglement a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la création du réglement.");
                }
            })
            .catch((error) => {
                console.log('Erreur lors de la requête.', error);
            })
    }

    return (
        <>
            <Form onSubmit={handleSubmit} className="addRegulation">

                <div className="addRegulation__title">
                    <label htmlFor="title">Titre</label>
                    <input type="text" name="title" maxLength={50} required={true} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="addRegulation__link">
                    <label htmlFor="link">Lien</label>
                    <input type="text" name="link" maxLength={50} required={true} value={link} onChange={(e) => setLink(e.target.value)} />
                </div>

                <div className="addRegulation__btn">
                    <button type="submit">Ajouter</button>
                </div>

                <p className="addAdmins__validate">{message}</p>
                
            </Form>
        </>
    )

}

export default RegulationAdd;