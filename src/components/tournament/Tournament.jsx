import Description from "../description/Description";

const Tournament = () => {

    return (
        <section className="tournament">
            <div className="tournament__title">
                <hr className="tournament__title__left-line" />
                <h2>RÉSULTATS</h2>
                <hr className="tournament__title__right-line" />
            </div>

            <div className="tournament__list">
                <Description />
            </div>

            <div className="tournament__more-results">
                <a href="">Plus de résultats</a>
            </div>

        </section>
    )
}

export default Tournament;