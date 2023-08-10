import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import fetch from "../../../utilities/fetchForAll.js";
import useWindowSize from "../../../utilities/useWindowSize.jsx";

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
                    <motion.li className="accordion-comity__item" key={item.id}
                        initial={{
                            opacity: 1,
                            translateX: item.id % 2 === 0 ? "-100%" : "100%",
                        }}
                        animate={{
                            opacity: 1,
                            translateX: 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 50
                        }}
                    >

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
                                <p>Nom: <span>{item.lastName}</span></p>
                                <p>Prénom: {item.firstName}</p>
                                <p onClick={() => handleMail(item.mail)}>E-mail: <span>{item.mail}</span></p>
                            </div>
                        </section>
                    </motion.li>
                ))}
            </ul>
        )
    }
}

export default ComityDescription;