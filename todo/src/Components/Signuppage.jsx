import React, { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom";

const Signuppage = () => {
    const [user, setUser] = useState({})

    const navigate = useNavigate();
    const handleChange = (e) => {
        let {name, value} = e.target
        setUser( {
            ...user,
            [name] : value
        })
    }

    const handleSubmit = () => {
        let payload = JSON.stringify(user)
        fetch("http://localhost:8080/auth/signup", {
            headers : {
                "Content-Type" : "application/json"
            },
            method : 'POST',
            body : payload
        })
        .then((res) => res.json())
        .then((res) => navigate("/login"))
        .catch((err) => console.log(err))
    }
    return <div>
        <h1>Signuppage</h1>
        <div>
            <input type="text" placeholder="enter your name" name="name" onChange={handleChange}/> <br />
            <input type="text" name="username"  placeholder="username" onChange={handleChange}/> <br />
            <input type="text" name="email" placeholder="enter your email" onChange={handleChange}/> <br />
            <input type="text" name="password" placeholder="enter password" onChange={handleChange}/> <br />
            <button type="submit" onClick={handleSubmit}>Sign up</button> <br />
        </div>
    </div>
}

export {Signuppage}