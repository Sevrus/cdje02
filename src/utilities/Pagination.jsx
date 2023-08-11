const Pagination = ({ postsPerPage, totalPosts, setCurrentPage, currentPage }) => {

    let pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">

            {pageNumbers.map((number, i) => {
                return <button key={i}
                    onClick={() => setCurrentPage(number)}
                    className={number === currentPage ? 'active' : ''}
                >
                    {number}
                </button>
            })}

        </div>
    )
}

export default Pagination;