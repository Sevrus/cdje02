const LegalNotice = () => {

    return (
        <div className="legal-notice">
            <div className="legal-notice__header">
                <h1 className="legal-notice__header__title">
                    Mentions légales
                </h1>
                <div className="legal-notice__header__subtitle">
                    En vigueur au 28/07/2023
                </div>
            </div>

            <div className="legal-notice__content">
                <div className="legal-notice__content__intro">
                    <p>
                        Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la
                        Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et
                        visiteurs, ci-après l'Utilisateur, du site cdje02-asso.fr , ci-après le Site, les présentes mentions
                        légales.
                    </p>
                    <p>
                        La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve
                        des présentes mentions légales.
                    </p>
                    <p>
                        Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».
                    </p>
                </div>

                <div className="legal-notice__content__article">
                    <h2 className="legal-notice__content__article__title">
                        ARTICLE 1 - L'EDITEUR
                    </h2>
                    <p className="legal-notice__content__article__content">
                        L’édition et la direction de la publication du Site est assurée par Bracq Christian, domiciliée 11 place
                        du Nain d'Alsace, appt 30, 02100 ST QUENTIN, dont le numéro de téléphone est 0664981341, et
                        l'adresse e-mail <a href="mailto:bracq.christian.ffe@gmail.com">bracq.christian.ffe@gmail.com</a>.
                        ci-après l'Editeur.
                    </p>
                </div>

                <div className="legal-notice__content__article">
                    <h2 className="legal-notice__content__article__title">
                        ARTICLE 2 - L'HEBERGEUR
                    </h2>
                    <p className="legal-notice__content__article__content">
                        L'hébergeur du Site est la société Ionos, dont le siège social est situé au IONOS SARL, 7 PL DE LA
                        GARE 57200 SARREGUEMINES , avec le numéro de téléphone : 0970808911
                    </p>
                </div>

                <div className="legal-notice__content__article">
                    <h2 className="legal-notice__content__article__title">
                        ARTICLE 3 - ACCES AU SITE
                    </h2>
                    <p className="legal-notice__content__article__content">
                        Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption
                        programmée ou non et pouvant découlant d’une nécessité de maintenance.
                        <br />
                        En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable.
                    </p>
                </div>

                <div className="legal-notice__content__article">
                    <h2 className="legal-notice__content__article__title">
                        ARTICLE 4 - COLLECTE DES DONNEES
                    </h2>
                    <p className="legal-notice__content__article__content">
                        Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la
                        mesure où il ne collecte aucune donnée concernant les utilisateurs.
                        <br />
                        Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site,
                        sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires
                        telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.
                    </p>
                </div>
            </div>

            <div className="legal-notice__footer">
                Rédigé sur <a href="http://legalplace.fr">http://legalplace.fr</a>
            </div>
        </div >
    )
}

export default LegalNotice;