import { motion } from 'framer-motion';

const Description = ({ data }) => {

    return (
        <>
            {data &&
                data.map((item) => (
                    <motion.li className="activity__article" key={item.id}
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

                        <div className="activity__article__title">
                            <hr className="activity__article__title__left-line" />
                            <h3>{item.title}</h3>
                            <hr className="activity__article__title__right-line" />
                        </div>
                        <div className="activity__article__more">
                            <a href={item.link} target="_blank" >Lire la suite</a>
                        </div>
                    </motion.li>
                ))
            }
        </>
    )
}

export default Description;