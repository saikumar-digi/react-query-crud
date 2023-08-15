import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getUserById } from '../api/serverController'
import { useNavigate, useParams } from 'react-router-dom'

const User = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { isError, isLoading, error, data:users } = useQuery({
        queryKey: ["user", id],
        queryFn: ()=>getUserById(id),
    })

    if (isLoading) {
        return 'loading'
    }

    if (isError) {
        return `Error: ${error.meassage}`
    }

    return (
        <div>
         <button onClick={()=>navigate(`/`)}>Back to List Page</button>
            <h1>{users.name}</h1>
            <h1>{users.location}</h1>
        </div>
    )
}

export default User
