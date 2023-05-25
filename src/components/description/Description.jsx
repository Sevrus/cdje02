const Description = ({data}) => {

    return (
        <>
            {data &&
                data.map((item) => (
                    <div className="activity__article" key={item.id}>
                        <div className="activity__article__title" >
                            <hr className="activity__article__title__left-line" />
                            <h4>{item.name}</h4>
                            <hr className="activity__article__title__right-line" />
                        </div>
                        <div className="activity__article__more">
                            <a href="">Lire la suite</a>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default Description;