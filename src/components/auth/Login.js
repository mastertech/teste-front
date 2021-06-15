import React, { useState,useEffect, useContext } from 'react'
import { useHistory,withRouter } from "react-router-dom"
import { AuthContext } from '../../provider/AuthProvider'
import Loader from '../utils/Loader'

const URL = process.env.REACT_APP_API

function Login() {
    
    const history = useHistory()
    const { setAuthenticated,authenticated } = useContext(AuthContext)
    const [loading,setLoading] =useState(false)
    const [message,setMessage] = useState(null)

    const [data,setData] =useState({
        email:null,password:null
    })

    useEffect(() => {
        console.log(authenticated)
    } ,[])

    const textChange = (e) => {
        const { name, value } = e.target
        setData({...data,[name]:value})
    }

    const submitLogin = async () => {

        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        try {
            const response = await fetch(URL, options);
            if(response.status === 200) {
                const user = await response.json()
                setAuthenticated(true)
                history.push('/user',user)
            } 
            
            if(response.status === 404){
                setMessage('Credenciais inválidas')
                return resetMessage(2000)
            }
        } catch (error) {
            setMessage(error)
            return resetMessage(3000)
        }
    }

    const  validateLogin = (e) => {
        e.preventDefault()
        setLoading(true)
        const {password, email} = data

        if(email === null) {
            setMessage('Insira o E-mail para Logar!')
            return resetMessage() 
        }

        if(!validateEmail(email)) {
            setMessage('Formato do E-mail Invalido!')
            return resetMessage()  
        }

        if(password === null) {
            setMessage('Insira a Senha para Logar!')
            return resetMessage()   
        }

        if(password.length < 8) {
            console.log(password.length)
            setMessage('A senha tem que ter no mínimo 8 caracteres')
            return resetMessage()
        }

        setTimeout(() => {
            submitLogin()
        },500)
        
    }

    const  validateEmail = (email) => {
        const response = /\S+@\S+\.\S+/
        return response.test(email)
    }

    const resetMessage = (time=2000) => {
        setLoading(false)
        setTimeout(() => {
            setMessage(null)
        },time)
    }

    return (
        <div className="content">
            <form className="form" method="POST" onSubmit={validateLogin}>
                <header className="title">
                    <h2>Login</h2>
                </header>
                <span className="message">{ message }</span>
                <div>
                    <div className="input-content">
                        <label>E-mail</label>
                        <input 
                            className="input"
                            type="email" 
                            name="email" 
                            placeholder="Digite o E-mail" 
                            onChange={textChange}
                        />
                    </div>
                    <div className="input-content">
                        <label>Senha</label>
                        <input 
                            className="input"
                            type="password" 
                            name="password" 
                            placeholder="Digite sua Senha" 
                            onChange={textChange}
                        />
                    </div>
                    <div className="btn-content">
                        <button 
                        className="btn" 
                        type="submit"
                        onClick={validateLogin}>
                            { loading ? <Loader /> : 'Login' }
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default withRouter(Login)