import React, { useState } from 'react'

const UserForm = ({onSubmit,initialData}) => {

    const [user, setUser] = useState({
        name: initialData.name || "",
        location: initialData.location || ""
    })


    const handleChangeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(user);
        setUser({
            name: "",
            location: ""
        })
    }


    const renderField = (label) => (
        <div>
            <label>{label}</label>
            <input
                type='text'
                name={label.toLowerCase()}
                value={user[label.toLowerCase()]}
                onChange={handleChangeInput} />
        </div>
    )

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {renderField("Name")}
                {renderField("Location")}
                <button type='submit'>Sumbit</button>
            </form>
        </div>
    )
}
export default UserForm
