import { motion } from 'framer-motion';

const drop = {
    hidden: { opacity: 0, y: "100vh" },
    visible: {
        opacity: 1, y: 0,
        transition: { type: "spring", stiffness: 100 }
    },
    exit: { opacity: 0, y: "100vh", transition: { duration: 0.8 } }
}

const RefereeModal = ({ closeModal }) => {

    return (
        <motion.div classname="modalRefereeBack" onClick={closeModal}
            style={{
                position: "fixed", top: "0", left: "0", right: "0", bottom: "0",
                background: "rgba(0,0,0,0.7)", display: "flex", justifyContent: "center"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div className="modalReferee" onClick={(e) => e.stopPropagation()}
                variants={drop} initial="hidden" animate="visible" exit="exit"
            >
                <li className="accordion-referee__item">
                    <div className="accordion-referee__item__title">
                        <hr className="accordion-referee__item__title--left" />
                        <h3>TRUC MUCH</h3>
                        <hr className="accordion-referee__item__title--right" />
                    </div>
                    <section
                        className='accordion-referee__item__content show'
                    >
                        <p>Mister Prez</p>
                        <p>Validité: 2020-80</p>
                        <p>Club: Fight Club</p>
                    </section>
                </li>
                {/* {dataReferee.map((item) => (
                    <li className="accordion-referee__item" key={item.id}>
                        <div className="accordion-referee__item__title">
                            <hr className="accordion-referee__item__title--left" />
                            <h3>{item.name}</h3>
                            <hr className="accordion-referee__item__title--right" />
                            <FontAwesomeIcon
                                icon= {faChevronUp}
                                className="accordion-referee__item__title__arrow"
                                onClick={() => closeModal()}
                            />
                        </div>

                        <section
                            className='accordion-referee__item__content show'
                        >
                            <p>{item.title}</p>
                            <p>Validité: {item.validity}</p>
                            <p>Club: {item.club}</p>
                        </section>
                    </li>
                ))} */}
            </motion.div>

        </motion.div>

    )
}

export default RefereeModal;