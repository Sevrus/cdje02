import { Form } from "react-router-dom";

const ComityAdd = () => {

    return (

        <>

            <Form className="addComity">

            <div className="addComity__job">
                    <label htmlFor="job">Poste</label>
                    <input type="text" name="job" maxLength={50} required={true} />
                </div>

                <div className="addComity__lastname">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name="lastname" maxLength={20} required={true} />
                </div>

                <div className="addComity__firstname">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" name="firstname" maxLength={20} required={true} />
                </div>

                <div className="addComity__email">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" maxLength={50} required={true} />
                </div>

                <div className="addComity__image">
                    <label htmlFor="image">Image</label>
                    <input type="text" name="image" maxLength={50} required={true} />
                </div>

                <div className="addComity__alt">
                    <label htmlFor="alt">Alt (Texte Alternatif)</label>
                    <input type="text" name="alt" maxLength={50} required={true} />
                </div>

                <div className="addComity__btn">
                    <button>Ajouter</button>
                </div>

            </Form>

        </>

    )

}

export default ComityAdd;