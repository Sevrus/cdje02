import ClubsDescription from "./components/clubsDescription/ClubsDescription";
import ClubsMap from "./components/clubsMap/ClubsMap";

const Clubs = () => {

    return (
        <section className="clubs">

            <div className="clubs__title">

                <div className="clubs__title__subhead">
                    <h3>TROUVER</h3>
                </div>

                <div className="clubs__title__bigTitle">
                    <hr className="clubs__title__bigTitle__lineLeft" />
                    <h2>UN CLUB</h2>
                    <hr className="clubs__title__bigTitle__lineRight" />
                </div>

            </div>

            <div className="clubs__list">

                <div className="clubs__list__left">

                    <ClubsDescription />

                    <ClubsDescription />

                    <ClubsDescription />

                    <ClubsDescription />

                </div>

                <div className="clubs__list__right">

                    <ClubsDescription />

                    <ClubsDescription />

                    <ClubsDescription />

                </div>

                <ClubsMap />

            </div>


        </section>
    )
}

export default Clubs;