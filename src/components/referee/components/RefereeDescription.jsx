import dataReferee from "./dataReferee.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const RefereeDescription = () => {
    const [selected, setSelected] = useState(null);

    const toggle = i => {
        if (selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }

    return (
        <ul className="accordion-referee">
            {dataReferee.map((item, i) => (
                <li className="accordion-referee__item" key={item.id}>
                    <div className="accordion-referee__item__title" onClick={() => toggle(i)}>
                        <hr className="accordion-referee__item__title--left"/>
                        <h3>{item.name}</h3>
                        <hr className="accordion-referee__item__title--right"/>
                        <FontAwesomeIcon
                            icon={selected === i ? faChevronUp : faChevronDown}
                            className="accordion-referee__item__title__arrow"
                        />
                    </div>
                    <section
                        className={selected === i ? 'accordion-referee__item__content show' : 'accordion-referee__item__content'}
                    >
                        <p>{item.title}</p>
                        <p>Validité: {item.validity}</p>
                        <p>Club: {item.club}</p>
                    </section>
                </li>
            ))}
        </ul>
    )
}

export default RefereeDescription;