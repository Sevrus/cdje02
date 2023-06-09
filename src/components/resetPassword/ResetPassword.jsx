import { Form } from "react-router-dom";

const ResetPassword = () => {

    return (
        <Form className="resetPassword">
            
            <div className="resetPassword__password">
                <label htmlFor="password">Nouveau mot de passe</label>
                <input type="password" name="password" minLength={8} maxLength={50} required={true} />
            </div>

            <div className="resetPassword__confirmPassword">
                <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                <input type="confirmPassword" name="confirmPassword" minLength={8} maxLength={50} required={true} />
            </div>

            <div className="resetPassword__btn">
                <button>Confirmer</button>
            </div>
        </Form>
    )
}

export default ResetPassword;