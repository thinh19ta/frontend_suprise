import { createContext, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({
        token: localStorage.getItem("token"),
        accountId: localStorage.getItem("accountId")
    })

    const login = (authResponse) => {
        localStorage.setItem("token", authResponse.token)
        localStorage.setItem("accountId", authResponse.accountId)
        setAuth({
            token: authResponse.token,
            accountId: authResponse.accountId
        })
    }

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("accountId")
        setAuth({
            token: "",
            accountId: null
        })
    }

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
