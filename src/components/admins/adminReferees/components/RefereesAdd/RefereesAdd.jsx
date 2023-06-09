import { Form } from "react-router-dom";

const RefereesAdd = () => {

    return (

        <>

            <Form className="addReferee">

                <div className="addReferee__lastname">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name="lastname" maxLength={20} required={true} />
                </div>

                <div className="addReferee__firstname">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" name="firstname" maxLength={20} required={true} />
                </div>

                <div className="addReferee__validity">
                    <label htmlFor="lastname">Validité</label>
                    <input type="text" name="validity" maxLength={4} required={true} />
                </div>

                <div className="addReferee__type">
                    <label htmlFor="lastname">Type</label>
                    <input type="text" name="type" maxLength={100} required={true} />
                </div>

                <div className="addReferee__club">
                    <label htmlFor="lastname">Club</label>
                    <input type="text" name="club" maxLength={100} required={true} />
                </div>

                <div className="addReferee__btn">
                    <button>Ajouter</button>
                </div>

            </Form>

        </>

    )

}

export default RefereesAdd;