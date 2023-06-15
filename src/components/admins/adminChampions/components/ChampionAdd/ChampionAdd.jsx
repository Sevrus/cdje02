const ChampionAdd = () => {

    return (

        <>

            <section className="addChampion">

                <div className="addChampion__name">
                    <label htmlFor="name">Nom</label>
                    <input type="text" name="name" maxLength={20} required={true} />
                </div>

                <div className="addChampion__year">
                    <label htmlFor="lastname">Année</label>
                    <input type="text" name="year" maxLength={4} required={true} />
                </div>

                <div className="addChampion__btn">
                    <button>Ajouter</button>
                </div>

            </section>

        </>

    )

}

export default ChampionAdd;