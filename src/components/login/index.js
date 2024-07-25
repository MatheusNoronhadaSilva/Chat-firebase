import React from "react";
import { auth, provider } from "../../services/firebase";
import * as C from "./style"

const Login = () => {
    const handleSignin = () => {
        auth.signInWithPopup(provider).catch(alert)
    }
    return (
        <C.container>
            <C.Button onClick={handleSignin}>Login com google</C.Button>
        </C.container>
    )
}

export default Login