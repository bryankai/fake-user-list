import React from 'react';

const SearchBar = ({searchQuery, setSearchQuery}) => {
  const handleSearch = (e) => setSearchQuery(e.target.value);
  return ( 
    <input name="search-bar" placeholder="Search for users..." onChange={handleSearch}>
    </input>
   );
}
 
export default SearchBar;