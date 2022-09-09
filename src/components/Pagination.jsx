import React from "react";

const Pagination = ({ itemCount, pageSize, currentPage, setCurrentPage }) => {
  console.log(itemCount, pageSize, currentPage);
  const numberOfPages = Math.ceil(itemCount / pageSize);
  const createPages = (numberOfPages) => {
    console.log(numberOfPages);
    let arr = [];
    for (let i = 1; i <= numberOfPages; i++) {
      arr.push(i);
    }
    return arr;
  };
  const pages = createPages(numberOfPages);

  const classNames = (page) =>
    page === currentPage ? "page-item active" : "page-item";

  // classnames: disabled, active, etc.
  return (
    <nav aria-label="users-page-selection">
      <ul className="pagination">
        <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
          <button
            className="page-link"
            href="#"
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Previous
          </button>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={classNames(page)}
            onClick={() => setCurrentPage(page)}
          >
            <button className="page-link" href="#">
              {page}
            </button>
          </li>
        ))}
        <li
          className={
            currentPage === numberOfPages ? "page-item disabled" : "page-item"
          }
        >
          {" "}
          <button
            className="page-link"
            href="#"
            onClick={() => setCurrentPage((prev) => prev + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
