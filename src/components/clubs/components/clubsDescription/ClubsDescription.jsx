import dataClubs from "./dataClubs.js"

const ClubsDescription = ({ toogle, selected }) => {

    return (
        <>
            {dataClubs.map((item) => (

                <li
                    className={selected === item.id ? "article-clubs active" : "article-clubs"}
                    key={item.id}
                    onClick={() => toogle(item.id, item.coord)}
                >

                    <div className="article-clubs__title">
                        <h4>{item.name}</h4>
                        <hr className="article-clubs__title__separation" />
                    </div>

                    <div className="article-clubs__description">
                        <p>{item.city}</p>
                        <p>Président: {item.president}</p>
                        <p>Membres: {item.members}</p>
                        <p>{item.site}</p>
                        <p>{item.tel}</p>
                    </div>

                </li>
            ))}
        </>
    )
}

export default ClubsDescription;