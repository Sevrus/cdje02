const Description = ({data}) => {

    return (
        <>
            {data &&
                data.data.map((item) => (
                    <div className="activity__article" key={item.id}>
                        <div className="activity__article__title" >
                            <hr className="activity__article__title__left-line" />
                            <h4>{item.title}</h4>
                            <hr className="activity__article__title__right-line" />
                        </div>
                        <div className="activity__article__more">
                            <a href={item.link}>Lire la suite</a>
                        </div>
                    </div>
                ))}
        </>
    )
}

export default Description;