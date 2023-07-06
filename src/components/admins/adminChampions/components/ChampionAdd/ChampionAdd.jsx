import { useState } from "react";
import { Form } from "react-router-dom";
import { clearErrorAfterDelay } from "../../../../../utilities/clearErrorAfterDelay";
import { ReloadAfterDelay } from "../../../../../utilities/ReloadAfterDelay";

const ChampionAdd = () => {
    const [name, setName] = useState("");
    const [years, setYears] = useState("");

    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/aisnechampions", {
            method: 'POST',
            body: JSON.stringify({
                name,
                years
            }),
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("token")}`,
                "Content-type": "application/json"
              },
        })
            .then(resp => {
                if (resp.ok) {
                    setMessage(`Le champion a bien été créé`);
                    ReloadAfterDelay(setMessage, 3000);
                } else {
                    setMessage(`La création du champion a échoué.`);
                    clearErrorAfterDelay(setMessage, 3000);
                    throw new Error("Erreur lors de la création du champion.");
                }
            })
            .catch((error) => {
                console.log('Erreur lors de la requête.', error);
            })
    }


        return (

            <>

                <Form onSubmit={handleSubmit} className="addChampion">

                    <div className="addChampion__name">
                        <label htmlFor="name">Nom</label>
                        <input type="text" name="name" maxLength={20} required={true} value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>

                    <div className="addChampion__year">
                        <label htmlFor="lastname">Année</label>
                        <input type="text" name="year" maxLength={10} required={true} value={years} onChange={(e) => setYears(e.target.value)}/>
                    </div>

                    <div className="addChampion__btn">
                        <button type="submit">Ajouter</button>
                    </div>

                    <p className="addChampion__message">{message}</p>

                </Form>

            </>

        )
}

export default ChampionAdd;