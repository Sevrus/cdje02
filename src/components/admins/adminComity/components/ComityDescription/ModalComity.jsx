import { useState } from "react";
import { Form } from "react-router-dom";
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay.js";
import { ReloadAfterDelay } from "../../../../../utilities/ReloadAfterDelay.js";

const ModalComity = ({ closeModal, comityData }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [title, setTitle] = useState(comityData.title);
    const [image, setImage] = useState(comityData.image);
    const [alt, setAlt] = useState(comityData.alt);
    const [firstName, setFirstname] = useState(comityData.firstName);
    const [lastName, setLastname] = useState(comityData.lastName);
    const [mail, setMail] = useState(comityData.mail);

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoaded(true);

        const updatedData = {
            title: title,
            image: image,
            alt: alt,
            firstName: firstName,
            lastName: lastName,
            mail: mail
        };

        fetch("http://localhost:3000/api/comities/" + comityData.id, {
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
                    setMessage(`Le membre a bien été modifié.`);
                    ReloadAfterDelay(setMessage, 3000);
                } else {
                    setMessage(`La modification du membre a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la modification du membre.");
                }
            })
            .catch(error => {
                setIsLoaded(false);
                setError(error.message);
            })
    }

    return (
        <>
            <div className="modalComity" onClick={closeModal}>
            </div>

            <Form className="modalComity__content" onSubmit={handleSubmit}>
                <div className="modalComity__content__close" onClick={closeModal}></div>

                <div className="modalComity__content__job">
                    <label htmlFor="job" className="modalComity__content__job__label">Poste</label>
                    <input type="text" name="job" id="job" className="modalComity__content__job__input" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>

                <div className="modalComity__content__lastname">
                    <label htmlFor="lastname" className="modalComity__content__lastname__label">Nom</label>
                    <input type="text" name="lastname" id="lastname" className="modalComity__content__lastname__input" value={firstName} onChange={(e) => setFirstname(e.target.value)} />
                </div>

                <div className="modalComity__content__firstname">
                    <label htmlFor="firstname" className="modalComity__content__firstname__label">Prénom</label>
                    <input type="text" name="firstname" id="firstname" className="modalComity__content__firstname__input" value={lastName} onChange={(e) => setLastname(e.target.value)} />
                </div>

                <div className="modalComity__content__email">
                    <label htmlFor="email" className="modalComity__content__email__label">Email</label>
                    <input type="email" name="email" id="email" className="modalComity__content__email__input" value={mail} onChange={(e) => setMail(e.target.value)} />
                </div>

                <div className="modalComity__content__image">
                    <label htmlFor="image" className="modalComity__content__image__label">Image</label>
                    <input type="text" name="image" id="image" className="modalComity__content__image__input" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>

                <div className="modalComity__content__alt">
                    <label htmlFor="alt" className="modalComity__content__alt__label">Alt</label>
                    <input type="text" name="alt" id="alt" className="modalComity__content__alt__input" value={alt} onChange={(e) => setAlt(e.target.value)} />
                </div>

                <button disabled={isLoaded} type="submit" className="modalComity__content__button">{isLoaded ? "En Cours..." : "Confirmer"}</button>

                <p className="modalComity__content__message">{message}</p>
                
            </Form>
        </>
    )
}

export default ModalComity;