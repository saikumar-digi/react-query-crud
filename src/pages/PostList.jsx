import React from 'react'
import AddPost from '../component/AddPost'
import { useQuery } from '@tanstack/react-query'
import { getAllUserData } from '../api/serverController'
import { useNavigate } from 'react-router-dom';

function PostList() {

  const navigate = useNavigate();

const {isLoading,isError,data:users,error} = useQuery({
  queryKey:["users"],
  queryFn: getAllUserData
})

if (isLoading) {
  return '...Loading';
}
if (isError) {
  return `Error: ${error.meassage}`;
}

  return (
    <div>
      <AddPost />
      UserList
      {users.map(user =>
        <div key={user.id} style={{background:"green"}}>
          <h5 style={{cursor:"pointer"}}
          onClick={()=> navigate(`Post/${user.id}`)}>
          {user.name} and {user.location}</h5>
          <button style={{cursor:"pointer"}} 
          onClick={()=> navigate(`Post/${user.id}/edit`)}>Edit</button>
          <button>Delete</button>
        </div>
      )}
      
    </div>
  )
}

export default PostList
