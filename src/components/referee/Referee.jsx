import RefereeDescription from "./components/RefereeDescription.jsx";

const Referee = () => {

    return (
        <>
            <div className="title-referee">
                <hr className="title-referee__left-line" />
                <h2>ARBITRES</h2>
                <hr className="title-referee__right-line" />
            </div>
            <RefereeDescription />
        </>
    )
}

export default Referee;