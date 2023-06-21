import { useEffect, useState } from "react";
import { fetchForAll } from "../../../../../utilities/functionFetch"
import { Form } from "react-router-dom";

const ModalComity = ({ closeModal, data }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    const handleTitleChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, title: value }))
    }

    const handleImageChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, image: value }))
    }

    const handleAltChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, alt: value }))
    }

    const handleFirstnameChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, firstName: value }))
    }

    const handleLastnameChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, lastName: value }))
    }

    const handleMailChange = (e) => {
        const { value } = e.target;
        setDatas(prevState => ({ ...prevState, mail: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3000/api/comities/" + data.id, {
            method: 'PUT', body: JSON.stringify(datas),
            headers: {
                "Content-type": "application/json"
            },
        })
            .then(resp => {
                if (resp.ok) {
                    console.log(`La mise à jour du membre est effectué`)
                    setDatas(datas);
                } else {
                    console.log(`La mise à jour du membre a échoué.`);
                    throw new Error("Erreur lors de la mise à jour du membre.");
                }
            })
    }

    return (
        <>
            <div className="modalComity" onClick={closeModal}>
            </div>

            <Form className="modalComity__content" key={data.id} onSubmit={handleSubmit}>
                <div className="modalComity__content__close" onClick={closeModal}></div>

                <div className="modalComity__content__job">
                    <label htmlFor="job" className="modalComity__content__job__label">Poste</label>
                    <input type="txt" name="job" id="job" className="modalComity__content__job__input" value={datas.title || data.title} onChange={handleTitleChange} />
                </div>

                <div className="modalComity__content__lastname">
                    <label htmlFor="lastname" className="modalComity__content__lastname__label">Nom</label>
                    <input type="txt" name="lastname" id="lastname" className="modalComity__content__lastname__input" value={datas.firstName || data.firstName} onChange={handleFirstnameChange} />
                </div>

                <div className="modalComity__content__firstname">
                    <label htmlFor="firstname" className="modalComity__content__firstname__label">Prénom</label>
                    <input type="txt" name="firstname" id="firstname" className="modalComity__content__firstname__input" value={datas.lastName || data.lastName} onChange={handleLastnameChange} />
                </div>

                <div className="modalComity__content__email">
                    <label htmlFor="email" className="modalComity__content__email__label">Email</label>
                    <input type="email" name="email" id="email" className="modalComity__content__email__input" value={datas.mail || data.mail} onChange={handleMailChange} />
                </div>

                <div className="modalComity__content__image">
                    <label htmlFor="image" className="modalComity__content__image__label">Image</label>
                    <input type="txt" name="image" id="image" className="modalComity__content__image__input" value={datas.image || data.image} onChange={handleImageChange} />
                </div>

                <div className="modalComity__content__alt">
                    <label htmlFor="alt" className="modalComity__content__alt__label">Alt</label>
                    <input type="txt" name="alt" id="alt" className="modalComity__content__alt__input" value={datas.alt || data.alt} onChange={handleAltChange} />
                </div>

                <button className="modalComity__content__button">Confirmer</button>

            </Form>
        </>
    )
}

export default ModalComity;