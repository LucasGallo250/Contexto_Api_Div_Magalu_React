import React, { useEffect, useState } from 'react'


export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {
    const [ user, setUser ] = useState({
        name: ''
});

useEffect( () => {
    const userStore = localStorage.getItem('user');
    if (userStore) {
        setUser(JSON.parse(userStore))
    } else {
        setUser({
            name: ''
    })
    }
}, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
        {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext)