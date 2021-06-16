import React, { useState, useContext } from "react";

import api from '../apis/api'

import { AuthContext } from "../Context/AuthContext";

function Login(props) { 
    const context = useContext(AuthContext)   

    const [state, setState] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState({
        email: null,
        password: null,
    });
    
    function handleChange(event) {
        setState({ ...state, [event.currentTarget.name]: event.currentTarget.value });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        try {
        const response = await api.post("/user/login", state);

        context.setLoggedInUser({ ...response.data });
        localStorage.setItem(
            "loggedInUser",
            JSON.stringify({ ...response.data })
        );
        
        props.history.push("/profile");
        } catch (err) {
            console.error(err.response);
            setErrors({ ...err.response.data.errors });
            alert('Erro '+err.response.status+'\n Usuário inválido \\ credenciais falsas!')
        }
    }

        return (
            <div className="container">
                <div className="box">
                    <form onSubmit={handleSubmit}>
                        <div className="title">
                            <h1>Login</h1>
                        </div>
                        <div className="form-input">
                            <label htmlFor="signInFormEmail">E-mail</label>
                            <input
                            type="email"
                            name="email"
                            id="signInFormEmail"
                            value={state.email}
                            error={errors.email}
                            onChange={handleChange}
                            /> 
                        </div>

                        <div className="form-input">
                            <label htmlFor="signInFormPassword">Password</label>
                            <input
                            type="password"
                            name="password"
                            id="signInFormPassword"
                            value={state.password}
                            error={errors.password}
                            onChange={handleChange}
                            />
                        </div>
                        <div className='btn'>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }

export default Login;