import { useState } from "react";
import ClubsDescription from "./components/clubsDescription/ClubsDescription";
import ClubsMap from "./components/clubsMap/ClubsMap";

const Clubs = () => {

    const [coordinate, setCoordinate] = useState([49.04729203170085, 3.399767194606112])
    const [selected, setSelected] = useState(null)

    const toogle = ((i, coordx, coordy) => {
        const coord = new Array(coordx, coordy)
        if (selected === i) {
            return (
                setSelected(null)
            )
        }
        setSelected(i)
        setCoordinate(coord);
    })

    return (
        <section className="clubs">

            <div className="clubs__title">
                <h2 className="clubs__title__upperhead">
                    Trouver
                    <span className="clubs__title__subhead">un club</span>
                </h2>
            </div>

            <ClubsMap coord={coordinate} />

            <ul className="clubs__list">
                <ClubsDescription toogle={toogle} selected={selected} />
            </ul>

        </section>
    )
}

export default Clubs;