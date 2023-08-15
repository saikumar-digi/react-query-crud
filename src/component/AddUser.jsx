import React from 'react'
import PostForm from './UserForm'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createUser } from '../api/serverController';
import { v4 as uuidv4 } from 'uuid';

const AddUser = () => {

    const queryClient = useQueryClient()

    const createPostMutation = useMutation({
      mutationFn: createUser,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['users'] })
      },
    })
    
    const handleAddUser = (post) => {
      createPostMutation.mutate({
        id: uuidv4(),
        ...post
      })
    }

  return (
    <div>
    <PostForm onSubmit={handleAddUser} initialData={{}}/>
    </div>
  )
}

export default AddUser
