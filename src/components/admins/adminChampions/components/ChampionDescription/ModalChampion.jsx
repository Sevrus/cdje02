import { useState } from "react";
import { Form } from "react-router-dom";
import {clearErrorAfterDelay} from "../../../../../utilities/clearErrorAfterDelay.js";

const ModalChampion = ({ closeModal, championData }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const [name, setName] = useState(championData.name);
    const [years, setYears] = useState(championData.years);

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoaded(true);

        const updatedData = {
            name: name,
            years: years
        };

        fetch("http://localhost:3000/api/aisnechampions/" + championData.id, {
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
                    setMessage(`La mise à jour du champion est effectué`)
                    clearErrorAfterDelay(setMessage, 3000);
                    setDatas(datas);
                } else {
                    setMessage(`La mise à jour du champion a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la mise à jour du champion.");
                }
            })
            .catch(error => {
                setIsLoaded(false);
                setError(error.message);
            })
    }

    return (
        <>
            <div className="modalChampion" onClick={closeModal}>
            </div>

                <Form className="modalChampion__content" onSubmit={handleSubmit}>
                    <div className="modalChampion__content__close" onClick={closeModal}></div>

                    <div className="modalChampion__content__name">
                        <label htmlFor="name" className="modalChampion__content__name__label">Nom</label>
                        <input type="text" name="name" id="name" className="modalChampion__content__name__input" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div className="modalChampion__content__year">
                        <label htmlFor="year" className="modalChampion__content__year__label">Année</label>
                        <input type="text" name="year" id="year" className="modalChampion__content__year__input" value={years} onChange={(e) => setYears(e.target.value)} />
                    </div>

                    <button disabled={isLoaded} type="submit" className="modalChampion__content__button">{isLoaded ? "En Cours..." : "Confirmer"}</button>

                    <p className="addAdmins__validate">{message}</p>
                </Form>

        </>
    )
}

export default ModalChampion;