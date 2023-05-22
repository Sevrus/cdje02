import Description from "../description/Description";

const Regulation = () => {
    return (
        <section className="regulation">
            <div className="regulation__title">
                <hr className="regulation__title__left-line" />
                <h2>RÈGLEMENTS</h2>
                <hr className="regulation__title__right-line" />
            </div>

            <div className="regulation__list">
                <div className="regulation__list__left">
                    <Description />
                    <Description />
                    <Description />
                </div>
                <div className="regulation__list__right">
                    <Description />
                    <Description />
                    <Description />
                </div>
            </div>
        </section>
    )
}

export default Regulation;