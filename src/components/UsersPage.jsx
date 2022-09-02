import { React, useEffect, useState } from 'react';
import SearchBar from "./SearchBar";
import UsersList from "./UsersList";

const UsersPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoaded,setIsLoaded] = useState(true);
  const [error,setError] = useState();
  const [querySize,setQuerySize] = useState("10");

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=" + querySize)
      .then(res => res.json())
      .then(
        (response) => {
          console.log(response.results)
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
      )
  }, [querySize])

  const filterUsers = (users, searchQuery) => {
    let filteredUsers;
    if(searchQuery.length>0) {
      filteredUsers = users.filter((user)=> user.name.first.toLowerCase().includes(searchQuery) );
    } else {
      filteredUsers = users;
    }
    console.log({filteredUsers});
    return filteredUsers;
  }

  const filteredUsers = filterUsers(users, searchQuery);

  return ( 
    <>
      <SearchBar 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
      />
      <p>Users per page: </p>
      <div>
        <button onClick={()=>setQuerySize("5")}>
          5
        </button>
        <button onClick={()=>setQuerySize("10")}>
          10
        </button>
      </div>
      <p>{searchQuery}</p>
      <UsersList users={filteredUsers}/>
    </>
   );
}
 
export default UsersPage;