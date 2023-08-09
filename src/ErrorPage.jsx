import { Link } from "react-router-dom";
import ImageError from "./assets/svg/image_error.svg";

const ErrorPage = () => {
    return (

        <section className="errorPage">

            <div className="errorPage__container">
                <Link
                    className="errorPage__container__link"
                    to={'/'}>ACCUEIL</Link>
                <img
                    className="errorPage__container__image"
                    src={ImageError} alt="Image erreur"
                />
            </div>

            <div className="errorPage__message">
                <p>Certaines personnes jouent aux échecs, d’autres les collectionnent.</p>
            </div>

        </section>

    )
}

export default ErrorPage;