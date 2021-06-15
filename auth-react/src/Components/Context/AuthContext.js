import React, { useState, createContext, useEffect } from "react";

const AuthContext = createContext({ email: {}});

function AuthContextComponent(props) {
  const [loggedInUser, setLoggedInUser] = useState({ email: {}});

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");

    const parsedStoredUser = JSON.parse(storedUser || '""');

    if (parsedStoredUser.email) {
      setLoggedInUser({ ...parsedStoredUser });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContextComponent, AuthContext };