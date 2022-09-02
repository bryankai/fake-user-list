import User from './User';

const UsersList = ({users}) => {
  console.log(users);
  return ( 
    <div className="users-list">
      {users.length>0 && users.map(user => {
        console.log("users.length",users.length)
        return <User user = {user}/>
      })}
    </div>
   );
}
 
export default UsersList;