import React,{useContext, useEffect,useState} from 'react'
import { useHistory, useLocation } from "react-router-dom"
import { AuthContext } from '../../provider/AuthProvider'

function User(){

    const { setAuthenticated } = useContext(AuthContext)
    const location = useLocation()
    const history =useHistory()

    const [user,setUser] = useState({
        name:'xxx',email:null,avatar:null
    })

    useEffect(() => {
        setUser(location.state)
    })

    const logout = () => {
        setAuthenticated(false)
        history.push('/')
    }
    return (
        <div className="user-content">
            <div className="user-content-info">
                <div className="user-info">
                    <h2>Nome: { user.name }</h2>
                    <p>E-mail: { user.email }</p>
                    <p>UF: { user.state }</p>
                </div>
                <div className="user-image">
                    <img src={user.avatar}></img>
                </div>
            </div>

            <div className="btn-content">
                <button className="btn user-btn" onClick={logout}>Log out</button>
            </div>
        </div>
    )
}

export default User