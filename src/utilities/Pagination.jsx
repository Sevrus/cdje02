import { useState } from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const [activePage, setActivePage] = useState(1);

    const handlePageClick = (number) => {
        setActivePage(number);
    }

    return (
        <>
            <nav className="pagination">
                <ul className="pagination__list">

                    {pageNumbers.map((number) => (
                        <li key={number} className={`pagination__list__item ${activePage === number ? 'active' : ''}`}>
                            
                            <a href="!#" className="pagination__list__item__link"
                                onClick={() => {
                                    handlePageClick(number);
                                    paginate(number);
                                }}
                            >
                                {number}
                            </a>

                        </li>
                    ))}

                </ul>
            </nav>
        </>
    )
}

export default Pagination;