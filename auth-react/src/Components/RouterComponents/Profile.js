import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'


function Profile() {
    const { loggedInUser, setLoggedInUser } = useContext(AuthContext)
    const [state, setState] = useState({
        birthday: "",
        email: "",
        gender: "",
        id: "",
        name: "",
        state: "",
        avatar: ""
    })
    
    useEffect(() => {        
            try{
                const getData = localStorage.getItem("loggedInUser")   
                const parsedStoredUser = JSON.parse(getData || '""'); 

                setState({ ...parsedStoredUser})
            } catch(err) {
                console.error(err)
            }
        
    }, [])       
    
    return(
        <div className="container">
            <div className="box">
                <div className="box-profile">
                    <div className="data">                    
                        <h1>{state.name}</h1>
                        <label>{state.email}</label>
                        <label>{state.state}</label>
                    </div>
                    <div className='data-img'>
                        <img className='avatar' src={state.avatar} />
                    </div>
                </div>
                <div className='btn-logout'>
                    <button onClick={(event) => {
                        event.preventDefault()
                        setLoggedInUser({ email: {}})
                        localStorage.removeItem("loggedInUser")
                    }}
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Profile