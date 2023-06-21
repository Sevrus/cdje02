import { useEffect, useState } from "react";
import { Form, useParams } from "react-router-dom";
import { fetchForAll } from "../../../../../utilities/functionFetch"

const ModalChampion = ({ closeModal }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);
    const [initialDatas, setInitialDatas] = useState([]);
    const { id } = useParams();

    const handleNameChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, name: value }))
    }

    const handleYearsChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, years: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/aisnechampions/" + id, {
            method: 'PUT', body: JSON.stringify(datas)
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(`La mise à jour du champion est effectué`)
                    setDatas(datas);
                } else {
                    console.log(`La mise à jour du champion a échoué.`);
                    throw new Error("Erreur lors de la mise à jour du champion.");
                }
            })
    }

    useEffect(() => {
        fetchForAll(setIsLoaded, setError, setInitialDatas, "api/aisnechampions")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (
            <>
                <div className="modalChampion" onClick={closeModal}>
                </div>

                {initialDatas.data.map((item) => (

                    <Form className="modalChampion__content" key={item.id} onSubmit={handleSubmit}>
                        <div className="modalChampion__content__close" onClick={closeModal}></div>

                        <div className="modalChampion__content__name">
                            <label htmlFor="name" className="modalChampion__content__name__label">Nom</label>
                            <input type="txt" name="name" id="name" className="modalChampion__content__name__input" value={datas.name || item.name} onChange={handleNameChange}/>
                        </div>

                        <div className="modalChampion__content__year">
                            <label htmlFor="year" className="modalChampion__content__year__label">Année</label>
                            <input type="txt" name="year" id="year" className="modalChampion__content__year__input" value={datas.years || item.years} onChange={handleYearsChange}/>
                        </div>

                        <button className="modalChampion__content__button">Confirmer</button>

                    </Form>
                ))}
            </>
        )
    }
}

export default ModalChampion;