import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronUp, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import data from './data.js';
import {useState} from "react";

const ComityDescription = () => {
    const [selected, setSelected] = useState(null);

    const toggle = i => {
        if(selected === i) {
            return setSelected(null);
        }

        setSelected(i);
    }

    return (
        <ul className="accordion">
            {data.map((item, i) => (
                <li className="accordion__item" key={item.id}>
                    <div className="accordion__item__title" onClick={() => toggle(i)}>
                        <h3>{item.title}</h3>
                        <hr className="accordion__item__title--left"/>
                        <hr className="accordion__item__title--right"/>
                        <FontAwesomeIcon icon={selected === i ? faChevronUp : faChevronDown} className="accordion__item__title__arrow" />
                    </div>
                    <section className={selected === i ? 'accordion__item__content show' : 'accordion__item__content'}>
                        <img src={item.image} alt={item.alt}/>
                        <p>Nom: {item.firstName}</p>
                        <p>Prénom: {item.lastName}</p>
                        <p>E-mail: {item.mail}</p>
                    </section>
                </li>
            ))}
        </ul>
    )
}

export default ComityDescription;