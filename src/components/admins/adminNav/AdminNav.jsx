import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

const AdminNav = () => {

    return (
        <>
            <details className='adminNav'>

                <summary className='adminNav__title'>
                    <FontAwesomeIcon className='adminNav__title__leftChevron' 
                        icon={faChevronDown} />
                    <FontAwesomeIcon className='adminNav__title__rightChevron' 
                        icon={faChevronDown} />
                </summary>

                <section className='adminNav__links'>
                    <NavLink
                        to={`/admin/champions`}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Champions
                    </NavLink>
                    <NavLink
                        to={`/admin/referees`}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Arbitres
                    </NavLink>
                    <NavLink
                        to={`/admin/clubs`}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Clubs
                    </NavLink>
                    <NavLink
                        to={`/admin/comity`}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Comité
                    </NavLink>
                    <NavLink
                        to={`/admin/articles`}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Articles
                    </NavLink>
                    <NavLink
                        to={`/admin/results`}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Résultats
                    </NavLink>
                    <NavLink
                        to={`/admin/regulation`}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        Règlements
                    </NavLink>
                </section>

            </details>
        </>
    )
}

export default AdminNav;