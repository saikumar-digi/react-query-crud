import React from 'react'
import PostForm from './PostForm'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createUser } from '../api/serverController';
import { v4 as uuidv4 } from 'uuid';

const AddPost = () => {

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
    <PostForm onSubmit={handleAddUser}/>
    </div>
  )
}

export default AddPost
