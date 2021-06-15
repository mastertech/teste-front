import React, { useState, useContext } from "react";

import api from '../apis/api'

import { AuthContext } from "../Context/AuthContext";

function Login(props) { 
    const context = useContext(AuthContext)   

    const [state, setState] = useState({ email: "", password: "" });
    
    function handleChange(event) {
        setState({ ...state, [event.currentTarget.name]: event.currentTarget.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
        const response = await api.post("/user/login", state);
        // console.log(response);

        context.setLoggedInUser({ ...response.data });
        localStorage.setItem(
            "loggedInUser",
            JSON.stringify({ ...response.data })
        );
        
        props.history.push("/profile");
        } catch (err) {
            console.error(err.response);
        }
    }
        return (
            <div className="container">
                <div className="box-login">
                    <form onSubmit={handleSubmit}>

                        <h1>Login</h1>
                        <div>
                            <label htmlFor="signupFormEmail">E-mail</label>
                            <input
                            type="email"
                            name="email"
                            id="signupFormEmail"
                            value={state.email}
                            onChange={handleChange}
                            /> 
                        </div>

                        <div>
                            <label htmlFor="signupFormPassword">Password</label>
                            <input
                            type="password"
                            name="password"
                            id="signupFormPassword"
                            value={state.password}
                            onChange={handleChange}
                            />
                        </div>
                        <button type="submit">Login!</button>
                    </form>
                </div>

            </div>
        );
    }

export default Login;