const ChampionAdd = () => {

    return (

        <>

            <section className="addChampion">

                <div className="addChampion__lastname">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name="lastname" maxLength={20} required={true} />
                </div>

                <div className="addChampion__firstname">
                    <label htmlFor="lastname">Prénom</label>
                    <input type="text" name="firstname" maxLength={20} required={true} />
                </div>

                <div className="addChampion__year">
                    <label htmlFor="lastname">Année</label>
                    <input type="text" name="year" maxLength={4} required={true} />
                </div>

                <div className="addChampion__btn">
                    <button>Envoyer</button>
                </div>

            </section>

        </>

    )

}

export default ChampionAdd;