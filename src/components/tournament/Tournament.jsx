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
                <div className="tournament__list__left">
                    <Description />
                    <Description />
                </div>
                <div className="tournament__list__right">
                    <Description />
                    <Description />
                </div>
            </div>

            <div className="tournament__more-results">
                <a href="">Plus de résultats</a>
            </div>

        </section>
    )
}

export default Tournament;