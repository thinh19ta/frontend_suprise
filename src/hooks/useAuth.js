import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function useAuth() {
    const authContext = useContext(AuthContext)
    return [authContext.auth.token, authContext.auth.accountId]
}


export default useAuth
