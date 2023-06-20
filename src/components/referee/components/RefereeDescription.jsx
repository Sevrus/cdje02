import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import fetch from "../../../utilities/fetchForAll.js";
import useWindowSize from "../../../utils/useWindowSize.jsx";
import RefereeModal from "./RefereeModal.jsx";

const RefereeDescription = () => {
    const [openModal, setOpenModal] = useState(false);
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

    useEffect(() => {
        fetch(setIsLoaded, setError, setDatas, "api/referees")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (
            <>
                <ul className="accordion-referee">

                    {datas.data.map((item) => (
                        <li className="accordion-referee__item" onClick={() => setOpenModal(true)} key={item.id}>

                            <div className="accordion-referee__item__title" onClick={() => toggle(item.id)} >
                                <hr className="accordion-referee__item__title--left" />
                                <h3>{item.name}</h3>
                                <hr className="accordion-referee__item__title--right" />
                                <FontAwesomeIcon
                                    icon={screenWidth < 911 ? selected === item.id ? faChevronUp : faChevronDown : faChevronDown}
                                    className="accordion-referee__item__title__arrow"
                                />
                            </div>

                            <section
                                className={screenWidth < 911 ?
                                    selected === item.id ? 'accordion-referee__item__content show' : 'accordion-referee__item__content'
                                    : 'accordion-referee__item__content'}
                            >
                                <p>{item.title}</p>
                                <p>Validité: {item.validity}</p>
                                <p>Club: {item.club}</p>
                            </section>
                        </li>
                    ))}
                </ul>

                <AnimatePresence
                    initial={false}
                    mode="wait"
                    onExitComplete={() => null}
                >
                    {openModal && <RefereeModal closeModal={() => setOpenModal(false)} />}
                </AnimatePresence>
            </>
        )
    }
}

export default RefereeDescription;