import React, { useState } from 'react'
import  RootContext  from './RootContext'
import { getAllUserData } from '../api/serverController'
import { useQuery } from '@tanstack/react-query'

function RootProvider({ children }) {
 
  const { isLoading, isError, data: users, error } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUserData
  })

  return (
    <RootContext.Provider
      value={{
        users,
      }}
    >
      {children}
    </RootContext.Provider>
  )
}

export default RootProvider