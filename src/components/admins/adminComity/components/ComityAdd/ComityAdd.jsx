import { useState } from "react";
import { Form } from "react-router-dom";
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay";
import { ReloadAfterDelay } from "../../../../../utilities/ReloadAfterDelay";

const ComityAdd = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [alt, setAlt] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [mail, setMail] = useState("");

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/comities", {
            method: 'POST',
            body: JSON.stringify({
                title,
                image,
                alt,
                firstName,
                lastName,
                mail
            }),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-type": "application/json"
              },
        })
            .then(resp => {
                if (resp.ok) {
                    setMessage(`Le membre a bien été créé.`);
                    ReloadAfterDelay(setMessage, 3000);
                } else {
                    setMessage(`La création du membre a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la création du membre.");
                }
            })
            .catch((error) => {
                console.log('Erreur lors de la requête.', error);
            })
    }

    return (

        <>

            <Form onSubmit={handleSubmit} className="addComity">

                <div className="addComity__job">
                    <label htmlFor="job">Poste</label>
                    <input type="text" name="job" maxLength={25} required={true} value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="addComity__lastname">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name="lastname" maxLength={25} required={true} value={lastName} onChange={(e) => setLastname(e.target.value)} />
                </div>

                <div className="addComity__firstname">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" name="firstname" maxLength={25} required={true} value={firstName} onChange={(e) => setFirstname(e.target.value)} />
                </div>

                <div className="addComity__email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" maxLength={50} required={true} value={mail} onChange={(e) => setMail(e.target.value)} />
                </div>

                <div className="addComity__image">
                    <label htmlFor="image">Photo</label>
                    <input type="text" name="image" required={true} value={image} placeholder="Lien/adresse de la photo" onChange={(e) => setImage(e.target.value)} />
                </div>

                <div className="addComity__alt">
                    <label htmlFor="alt">Texte Alternatif</label>
                    <input type="text" name="alt" required={true} value={alt} placeholder="Description de la photo" onChange={(e) => setAlt(e.target.value)} />
                </div>

                <div className="addComity__btn">
                    <button type="submit">Ajouter</button>
                </div>

                <p className="addComity__message">{message}</p>
            </Form>

        </>

    )
}

export default ComityAdd;