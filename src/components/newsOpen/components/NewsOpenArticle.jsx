import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fetch from "../../../utilities/fetchForAll";

const NewsOpenArticle = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState({});

    const { id } = useParams()

    useEffect(() => {
        fetch(setIsLoaded, setError, setDatas, `api/news/${id}`)
    }, []);

    console.log(datas);

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {

        return (
            <>
                {datas && (

                    < section className="newsOpenArticle" key={datas.data.id}>

                        <div className="newsOpenArticle__title">
                            <hr className="newsOpenArticle__title__lineLeft" />
                            <h4>{datas.data.title}</h4>
                            <hr className="newsOpenArticle__title__lineRight" />
                        </div>

                        <div className="newsOpenArticle__description">
                            <p>{datas.data.description}</p>
                        </div>

                        <div className="newsOpenArticle__info">

                            <div className="newsOpenArticle__info__line">
                                <hr className="newsOpenArticle__info__line__center" />
                            </div>

                            <div className="newsOpenArticle__info__bottom">
                                <Link to={'/info'} className='newsOpenArticle__info__bottom__author'>
                                    <img src={datas.data.image} alt='miniature-photo' />
                                    <p>{datas.data.author}</p>
                                </Link>

                                <p>{datas.data.created}</p>
                            </div>

                        </div>

                    </section >
                )
                }

            </>
        )
    }
}

export default NewsOpenArticle;