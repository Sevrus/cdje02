import { Form } from "react-router-dom";

const RegulationAdd = () => {

    return (
        <>
            <Form className="addRegulation">

                <div className="addRegulation__title">
                    <label htmlFor="title">Titre</label>
                    <input type="text" name="title" maxLength={50} required={true} />
                </div>

                <div className="addRegulation__link">
                    <label htmlFor="link">Lien</label>
                    <input type="text" name="link" maxLength={50} required={true} />
                </div>

                <div className="addRegulation__btn">
                    <button>Ajouter</button>
                </div>

            </Form>
        </>
    )

}

export default RegulationAdd;