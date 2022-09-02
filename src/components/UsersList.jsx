import React from 'react';
import User from './User';

const UsersList = ({users}) => {
  return ( 
    <div className="users-list">
      {users.length===0 && 
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      }

      {users.length>0 && users.map(user => {
        console.log("users.length",users.length)
        return <User user = {user}/>
      })}
    </div>
   );
}
 
export default UsersList;