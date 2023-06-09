import { Form } from "react-router-dom";

const AdminsAdd = () => {

    return (
        <>
            <Form className="addAdmins">
            <div className="addAdmins__lastname">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name="lastname" id="lastname" maxLength={20} required={true} />
                </div>

                <div className="addAdmins__firstname">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" name="firstname" id="firstname" maxLength={20} required={true} />
                </div>

                <div className="addAdmins__email">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" maxLength={50} required={true} />
                </div>

                <div className="addAdmins__password">
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" minLength={8} maxLength={50} required={true} />
                </div>

                <div className="addAdmins__confirmPassword">
                    <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                    <input type="confirmPassword" name="confirmPassword" minLength={8} maxLength={50} required={true} />
                </div>

                <div className="addAdmins__btn">
                    <button>Ajouter</button>
                </div>
            </Form>
        </>
    )
}

export default AdminsAdd;
