import React from 'react';

const User = ({user}) => {
  const {title, first, last} = user.name;
  const fullName = `${title}. ${first} ${last}`;
  return ( 
    <div className="user" key={user.id.value}>
      <img src={user.picture.medium} alt="user profile"></img>
      <p>Name: {fullName}</p>
      <p>Email: {user.email}</p>
    </div>
   );
}

export default User;