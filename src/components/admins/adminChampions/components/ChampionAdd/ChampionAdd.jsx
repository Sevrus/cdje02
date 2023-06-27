import { useState } from "react";
import { Form } from "react-router-dom";

const ChampionAdd = () => {
    const [name, setName] = useState("");
    const [years, setYears] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/aisnechampions", {
            method: 'POST',
            body: JSON.stringify({
                name,
                years
            }),
            headers: {
                "Content-type": "application/json"
              },
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(`La création du champion est effectué`);
                } else {
                    console.log(`La création du champion a échoué.`);
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

                </Form>

            </>

        )
}

export default ChampionAdd;