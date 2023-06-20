import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import fetch from "../../../utilities/fetchForAll.js";
import useWindowSize from "../../../utils/useWindowSize.jsx";

const drop = {
    hidden: {
        opacity: 0,
        y: "100vh"
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            damping: 10,
            type: "spring",
            stiffness: 100
        }
    },
    exit: {
        opacity: 0,
        y: "100vh",
        transition: {
            duration: 0.8
        }
    }
}

const RefereeDescription = () => {
    const [selected, setSelected] = useState(null);
    const [selectedId, setSelectedId] = useState(null);
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
            <ul className="accordion-referee">

                {datas.data.map((item) => (
                    <>
                        <motion.li className="accordion-referee__item" layoutId={item.id}
                            onClick={() => setSelectedId(item.id)} key={item.id} >

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
                        </motion.li>

                        <AnimatePresence
                            // initial={false}
                            mode="wait"
                            onExitComplete={() => null}

                        >
                            {selectedId && (
                                <motion.div className="modalReferee"
                                    variants={drop} initial="hidden" animate="visible" exit="exit"
                                    layoutId={selectedId} key={selectedId}
                                >
                                    <li className="accordion-referee__item">
                                        <div className="accordion-referee__item__title">
                                            <hr className="accordion-referee__item__title--left" />
                                            <h3>{item.name}</h3>
                                            <hr className="accordion-referee__item__title--right" />
                                            <FontAwesomeIcon
                                                icon={faChevronUp}
                                                className="accordion-referee__item__title__arrow"
                                                onClick={() => setSelectedId(null)}
                                            />
                                        </div>

                                        <section className='accordion-referee__item__content show'>
                                            <p>{item.title}</p>
                                            <p>Validité: {item.validity}</p>
                                            <p>Club: {item.club}</p>
                                        </section>
                                    </li>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                ))}
            </ul>
        )
    }
}

export default RefereeDescription;