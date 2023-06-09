import { Form } from "react-router-dom";

const ClubsAdd = () => {

    return (

        <>

            <Form className="addClub">

                <div className="addClub__name">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name="name" maxLength={20} required={true} />
                </div>

                <div className="addClub__town">
                    <label htmlFor="town">Ville</label>
                    <input type="text" name="town" maxLength={50} required={true} />
                </div>

                <div className="addClub__site">
                    <label htmlFor="site">Site Internet</label>
                    <input type="text" name="site" maxLength={50} required={true} />
                </div>

                <div className="addClub__president">
                    <label htmlFor="president">Président</label>
                    <input type="text" name="president" maxLength={50} required={true} />
                </div>

                <div className="addClub__tel">
                    <label htmlFor="tel">Téléphone</label>
                    <input type="text" name="tel" maxLength={50} required={true} />
                </div>

                <div className="addClub__members">
                    <label htmlFor="members">Membres</label>
                    <input type="text" name="members" maxLength={3} required={true} />
                </div>

                <div className="addClub__btn">
                    <button>Ajouter</button>
                </div>

            </Form>

        </>

    )

}

export default ClubsAdd;