import React, { useContext } from 'react'
import RootContext from '../Context/RootContext'

const Count = () => {
    const {users} = useContext(RootContext)
    const userCount = users?.length;
     console.log(users, userCount);

  return (
    <div>
    {userCount}
    </div>
  )
}

export default Count
