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

                <div className="addComity__btn">
                    <button>Envoyer</button>
                </div>

            </Form>

        </>

    )

}

export default ComityAdd;