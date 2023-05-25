import Description from "../description/Description";
import dataRegulation from "./dataRegulation.js";

const Regulation = () => {
    return (
        <section className="regulation">
            <div className="regulation__title">
                <hr className="regulation__title__left-line" />
                <h2>RÈGLEMENTS</h2>
                <hr className="regulation__title__right-line" />
            </div>

            <div className="regulation__list">
                <Description data={dataRegulation} />
            </div>
        </section>
    )
}

export default Regulation;