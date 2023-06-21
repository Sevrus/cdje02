import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from "react";
import fetch from "../../../utilities/fetchForAll.js";
import useWindowSize from "../../../utils/useWindowSize.jsx";

const ComityDescription = () => {
    const [selected, setSelected] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);
    const screenWidth = useWindowSize().width;

    const toggle = i => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }

    const handleMail = (mail) => {
        window.location.href = `mailto:${mail}`;
    }

    useEffect(() => {
        fetch(setIsLoaded, setError, setDatas, "api/comities")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (
            <ul className="accordion-comity">
                {datas.data.map((item) => (
                    <li className="accordion-comity__item" key={item.id}>
                        <div className="accordion-comity__item__title" onClick={() => toggle(item.id)}>
                            <hr className="accordion-comity__item__title--left" />
                            <h3>{item.title}</h3>
                            <hr className="accordion-comity__item__title--right" />
                            <FontAwesomeIcon
                                icon={selected === item.id ? faChevronUp : faChevronDown}
                                className="accordion-comity__item__title__arrow"
                            />
                        </div>
                        <section
                            className={screenWidth < 600 ?
                                selected === item.id ? 'accordion-comity__item__content show' : 'accordion-comity__item__content'
                                : 'accordion-comity__item__content show'}
                        >
                            <img src={item.image} alt={item.alt} />
                            <div>
                                <p>Nom: {item.firstName}</p>
                                <p>Prénom: {item.lastName}</p>
                                <p onClick={() => handleMail(item.mail)}>E-mail: <span>{item.mail}</span></p>
                            </div>
                        </section>
                    </li>
                ))}
            </ul>
        )
    }
}

export default ComityDescription;