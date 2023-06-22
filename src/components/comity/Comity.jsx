import ComityDescription from "./components/ComityDescription.jsx";

const Comity = () => {

    return (
        <>
            <div className="title-comity">
                <hr className="title-comity__left-line" />
                <h2>LE COMITÉ</h2>
                <hr className="title-comity__right-line" />
            </div>
            <ComityDescription />
        </>
    )
}

export default Comity;