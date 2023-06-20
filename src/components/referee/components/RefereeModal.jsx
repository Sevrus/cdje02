import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import fetch from "../../../utilities/fetchForAll.js";

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

const RefereeModal = ({ closeModal }) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        fetch(setIsLoaded, setError, setDatas, "api/referees")
    }, [])

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (
            <motion.div className="modalRefereeBack" onClick={closeModal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div className="modalReferee" onClick={(e) => e.stopPropagation()}
                    variants={drop} initial="hidden" animate="visible" exit="exit"
                >
                    {datas.data.map((item) => (
                        <li className="accordion-referee__item" key={item.id}>
                            <div className="accordion-referee__item__title">
                                <hr className="accordion-referee__item__title--left" />
                                <h3>{item.name}</h3>
                                <hr className="accordion-referee__item__title--right" />
                                <FontAwesomeIcon
                                    icon={faChevronUp}
                                    className="accordion-referee__item__title__arrow"
                                    onClick={() => closeModal()}
                                />
                            </div>
                            <section className='accordion-referee__item__content show'>
                                <p>{item.title}</p>
                                <p>Validité: {item.validity}</p>
                                <p>Club: {item.club}</p>
                            </section>
                        </li>
                    ))}
                </motion.div>

            </motion.div>

        )
    }
}

export default RefereeModal;