import { Form } from "react-router-dom";

const ArticleAdd = () => {

    return (

        <>

            <Form className="addArticle">

            <div className="addArticle__title">
                    <label htmlFor="title">Titre</label>
                    <input type="text" name="title" maxLength={100} required={true} />
                </div>

                <div className="addArticle__author">
                    <label htmlFor="author">Auteur</label>
                    <input type="text" name="author" maxLength={50} required={true} />
                </div>

                <div className="addArticle__description">
                    <label htmlFor="description">Description</label>
                    <textarea name="description" maxLength={500} required={true} />
                </div>

                <div className="addArticle__date">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" required={true} />
                </div>

                <div className="addArticle__btn">
                    <button>Ajouter</button>
                </div>

            </Form>

        </>

    )

}

export default ArticleAdd;