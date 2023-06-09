import { Form } from "react-router-dom";

const ResultAdd = () => {

    return (

        <>

            <Form className="addResult">

                <div className="addResult__title">
                    <label htmlFor="title">Titre</label>
                    <input type="text" name="title" maxLength={50} required={true} />
                </div>

                <div className="addResult__link">
                    <label htmlFor="link">Lien</label>
                    <input type="text" name="link" maxLength={50} required={true} />
                </div>

                <div className="addResult__btn">
                    <button>Ajouter</button>
                </div>

            </Form>

        </>

    )

}

export default ResultAdd;