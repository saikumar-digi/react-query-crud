import React from 'react'
import AddPost from '../component/AddUser'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteUser, getAllUserData } from '../api/serverController'
import { useNavigate } from 'react-router-dom';

function UserList() {

  const navigate = useNavigate();
  const queryClient = useQueryClient()

const {isLoading,isError,data:users,error} = useQuery({
  queryKey:["users"],
  queryFn: getAllUserData
})

const deleteuserMutation = useMutation({
  mutationFn: deleteUser,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['users'] })
  },
})


if (isLoading) {
  return '...Loading';
}
if (isError) {
  return `Error: ${error.meassage}`;
}
const handleDelete = (id) =>{
  deleteuserMutation.mutate(id)
}

  return (
    <div>
      <AddPost />
      UserList
      {users.map(user =>
        <div key={user.id} style={{background:"green"}}>
          <h5 style={{cursor:"pointer"}}
          onClick={()=> navigate(`User/${user.id}`)}>
          {user.name} and {user.location}</h5>
          <button style={{cursor:"pointer"}} 
          onClick={()=> navigate(`User/${user.id}/edit`)}>Edit</button>
          <button   onClick={() => handleDelete(user.id)} >Delete</button>
        </div>
      )}
      
    </div>
  )
}

export default UserList
