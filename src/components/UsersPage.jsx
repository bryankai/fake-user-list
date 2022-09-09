import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import UsersList from "./UsersList";
import Pagination from "./Pagination";

const UsersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const QUERY_SIZE = 20;

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=" + QUERY_SIZE)
      .then((res) => res.json())
      .then(
        (response) => {
          console.log(response.results);
          setIsLoaded(true);
          setUsers(response.results);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  const filterUsers = (users, searchQuery) => {
    console.log(users, searchQuery);
    let filteredUsers;
    if (searchQuery.length > 0) {
      filteredUsers = users.filter((user) =>
        user.name.first.toLowerCase().includes(searchQuery)
      );
    } else {
      filteredUsers = users;
    }
    return filteredUsers;
  };

  const paginate = (list, pageSize, currentPage) => {
    const startItem = (currentPage - 1) * pageSize;
    return list.slice(startItem, startItem + pageSize);
  };

  const filteredUsers = filterUsers(users, searchQuery);
  const currentPageUsers = paginate(filteredUsers, pageSize, currentPage);

  return (
    <>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <p>Users per page: </p>
      <div>
        <button className="btn btn-primary" onClick={() => setPageSize(10)}>
          10
        </button>
        <button className="btn btn-primary" onClick={() => setPageSize(20)}>
          20
        </button>
      </div>
      <p>{searchQuery}</p>
      <UsersList users={currentPageUsers} />
      <Pagination
        itemCount={filteredUsers.length}
        pageSize={pageSize}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default UsersPage;
