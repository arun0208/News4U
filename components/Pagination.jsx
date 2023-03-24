const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
    const pagesCount = Math.ceil(items / pageSize);

    if (pagesCount === 1) return null;
    const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

    return (
        <>
            <nav aria-label="Page navigation example" class="text-center d-flex align-items-center justify-content-center">
                <ul class="pagination">
                    {pages.map((page) => (
                        <li class="page-item" style={{cursor:'pointer'}}
                        key={page}
                    >
                        <a class="page-link" onClick={() => onPageChange(page)}>
                            {page}
                        </a>
                    </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Pagination;