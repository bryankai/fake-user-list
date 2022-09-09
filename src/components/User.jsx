import React from "react";

const User = ({ user }) => {
  //

  const { city, state } = user.location;
  const { title, first, last } = user.name;

  // Helper Methods
  const createNameString = (title, first, last) => `${title}. ${first} ${last}`;
  const createLocationString = (city, state) => city + ", " + state;

  const fullName = createNameString(title, first, last);
  const location = createLocationString(city, state);
  return (
    <div className="user" key={user.id.value}>
      <img src={user.picture.medium} alt="user profile"></img>
      <p>Name: {fullName}</p>
      <p>Email: {user.email}</p>
      <p>Location: {location}</p>
    </div>
  );
};

export default User;
