import ClubsDescription from "./components/clubsDescription/ClubsDescription";
import ClubsMap from "./components/clubsMap/ClubsMap";

const Clubs = () => {

    return (
        <section className="clubs">

            <div className="clubs__title">

                <h3 className="clubs__title__subhead">TROUVER</h3>

                <div className="clubs__title__bigTitle">
                    <hr className="clubs__title__bigTitle__lineLeft" />
                    <h2>UN CLUB</h2>
                    <hr className="clubs__title__bigTitle__lineRight" />
                </div>

            </div>

            <div className="clubs__list">

                <ClubsDescription />

                <ClubsMap />

            </div>

        </section>
    )
}

export default Clubs;