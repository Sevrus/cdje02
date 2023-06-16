import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import RefereeModal from "./RefereeModal.jsx";
import dataReferee from "./dataReferee.js";

const RefereeDescription = () => {
    const [openModal, setOpenModal] = useState(false);
    // const [selected, setSelected] = useState(null);

    // const toggle = i => {
    //     if (selected === i) {
    //         return setSelected(null);
    //     }
    //     setSelected(i);
    // }

    return (
        <>
            {/* {
                openModal && createPortal(
                    <RefereeModal closeModal={() => setOpenModal(false)} />, document.body
                )
            } */}

            <ul className="accordion-referee">

                {dataReferee.map((item, i) => (
                    <li className="accordion-referee__item" onClick={() => setOpenModal(true)} key={item.id}>

                        <div className="accordion-referee__item__title" onClick={() => toggle(i)} >
                            <hr className="accordion-referee__item__title--left" />
                            <h3>{item.name}</h3>
                            <hr className="accordion-referee__item__title--right" />
                            <FontAwesomeIcon
                                // icon={selected === i ? faChevronUp : faChevronDown}
                                icon={faChevronDown}
                                className="accordion-referee__item__title__arrow"
                            />
                        </div>

                        {/* <section
                            className={selected === i ? 'accordion-referee__item__content show' : 'accordion-referee__item__content'}
                        >
                            <p>{item.title}</p>
                            <p>Validité: {item.validity}</p>
                            <p>Club: {item.club}</p>
                        </section> */}
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

export default RefereeDescription;