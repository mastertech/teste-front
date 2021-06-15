// import { useState, useEffect } from 'react'
// import { AuthContext } from '../Context/AuthContext'
// import api from '../apis/api'

function Profile() {
    // const context = useState(AuthContext)
    // const [state, setState] = useState({
    //     birthday: "",
    //     email: "",
    //     gender: "",
    //     id: "",
    //     name: "",
    //     state: "",
    //     avatar: ""
    // })
    
    const getData = localStorage.getItem("loggedInUser")
   
    const parsedStoredUser = JSON.parse(getData || '""');    

    // console.log(parsedStoredUser.name)
    return(
        <div className="container">
            <div className="box-profile">
                <div>
                    <h1>Usuário</h1>
                    <label>Email: {parsedStoredUser.email}</label>
                    <label>Estado: {parsedStoredUser.state}</label>
                </div>
                <div>
                    
                </div>
            </div>
            <button>Log Out</button>
        </div>
    )
}

export default Profile