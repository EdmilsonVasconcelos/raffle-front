import "./index.scss";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const renderPaginationLinks = () => {
    const links = [];

    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        const linkClass =
          pageNumber === currentPage
            ? "pagination-link active"
            : "pagination-link";

        links.push(
          <button
            onClick={() => onPageChange(pageNumber)}
            className={linkClass}
            key={pageNumber}
          >
            {pageNumber}
          </button>
        );
      }
    } else {
      const ellipsis = <span className="pagination-ellipsis">...</span>;

      const firstPage = (
        <button
          onClick={() => onPageChange(1)}
          className="pagination-link"
          key={1}
        >
          1
        </button>
      );
      const lastPage = (
        <button
          onClick={() => onPageChange(totalPages)}
          className="pagination-link"
          key={totalPages}
        >
          {totalPages}
        </button>
      );

      const middlePage = Math.ceil(maxVisiblePages / 2);
      const startPage =
        currentPage <= middlePage ? 2 : currentPage - (middlePage - 2);
      const endPage = startPage + maxVisiblePages - 4;

      links.push(firstPage);

      if (currentPage > middlePage) {
        links.push(ellipsis);
      }

      for (let pageNumber = startPage; pageNumber < endPage; pageNumber++) {
        const linkClass =
          pageNumber === currentPage
            ? "pagination-link active"
            : "pagination-link";

        links.push(
          <button
            onClick={() => onPageChange(pageNumber)}
            className={linkClass}
            key={pageNumber}
          >
            {pageNumber}
          </button>
        );
      }

      if (currentPage < totalPages - (middlePage - 1)) {
        links.push(ellipsis);
      }

      links.push(lastPage);
    }

    return links;
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container">
      <button
        onClick={handlePrevPage}
        className="arrow"
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      {renderPaginationLinks()}
      <button
        onClick={handleNextPage}
        className="arrow"
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
