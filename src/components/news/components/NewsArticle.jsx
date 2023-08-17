import { motion } from 'framer-motion';
import { Link, Route, Routes } from "react-router-dom";
import NewsOpen from "../../newsOpen/NewsOpen";

const NewsArticle = ({ data }) => {

    return (
        <>
            {data &&
                data.map((item) => (
                    <motion.li className="newsArticle" key={item.id}
                        initial={{
                            opacity: 0,
                            translateX: item.id % 2 === 0 ? -50 : 50,
                            translateY: -50
                        }}
                        whileInView={{
                            opacity: 1,
                            translateX: 0,
                            translateY: 0
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.5,
                            delay: item.id * 0.2
                        }}
                    >

                        <div className="newsArticle__title">
                            <hr className="newsArticle__title__lineLeft" />
                            <h3>{item.title}</h3>
                            <hr className="newsArticle__title__lineRight" />
                        </div>

                        <div className="newsArticle__description">
                            <p>{item.description}
                            </p>
                        </div>

                        <div className="newsArticle__link">
                            <Link to={`/articles/${item.id}`} >
                                Lire la suite
                            </Link>
                        </div>

                    </motion.li>
                ))
            }

            <Routes>
                <Route path="/articles/:id" element={<NewsOpen />} />
            </Routes>
        </>
    )
}

export default NewsArticle;