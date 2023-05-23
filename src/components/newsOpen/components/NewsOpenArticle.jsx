import profils from '../../../assets/images/Ellipse.png'

const NewsOpenArticle = () => {

    return (
        <section className="newsOpenArticle">

            <div className="newsOpenArticle__title">
                <hr className="newsOpenArticle__title__lineLeft" />
                <h4>Championnats de l’Aisne 12/06/2022</h4>
                <hr className="newsOpenArticle__title__lineRight" />
            </div>

            <div className="newsOpenArticle__description">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dolor, doloremque reiciendis libero quo delectus modi saepe?
                    Inventore ipsam vitae, ipsum architecto, accusantium ut tenetur corrupti error cumque minus quisquam distinctio!
                </p>
            </div>

            <div className="newsOpenArticle__info">

                <div className="newsOpenArticle__info__line">
                    <hr className="newsOpenArticle__info__line__center" />
                </div>

                <div className="newsOpenArticle__info__bottom">
                    <div className='newsOpenArticle__info__bottom__author'>
                        <img src={profils} alt='miniature-photo'/>
                        <p>Bracq Christian</p>
                    </div>
                
                    <p>11/05/2023</p>
                </div>

            </div>


        </section>
    )
}

export default NewsOpenArticle;