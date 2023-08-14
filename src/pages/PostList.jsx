import React, { useState } from 'react'

const PostList = () => { 

  const [user,setUser] = useState({
    name:"",
    age:"",
  })

  console.log(user);
  const handelChangeInput = (e) =>{
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }
  const renderField = (label) => (
    <div>
    <label>{label}</label>
    <input
        type='text'
        name={label.toLowerCase()}
        value={user[label.toLowerCase()]}
        onChange={handelChangeInput} />
    </div>
  )

  return (
    <div>
      PostList
      <form>
      {renderField("Name")}
      {renderField("Age")}
      </form>
    </div>
  )
}

export default PostList
