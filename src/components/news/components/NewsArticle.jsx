const NewsArticle = () => {

    return (
        <section className="newsArticle">

            <div className="newsArticle__title">
                <hr className="newsArticle__title__lineLeft" />
                <h4>Championnats de l’Aisne 12/06/2022</h4>
                <hr className="newsArticle__title__lineRight" />
            </div>

            <div className="newsArticle__description">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, doloremque reiciendis libero quo delectus modi saepe?
                    Inventore ipsam vitae, ipsum architecto, accusantium ut tenetur corrupti error cumque minus quisquam distinctio!
                </p>
            </div>

            <div className="newsArticle__link">
                <a href="<http://>" >Lire la suite</a>
            </div>


        </section>
    )
}

export default NewsArticle;