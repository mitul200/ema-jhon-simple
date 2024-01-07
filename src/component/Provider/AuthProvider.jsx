import { createContext, useEffect, useState } from "react";
export const AuthContext = createContext(null)

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user , setUser ] = useState(null)
    const [loding , setLoding] = useState(true)

    const creatUser =(email, password)=>{
        // setLoding(true)
       return createUserWithEmailAndPassword(auth, email, password)
       
    }
    const singIn =(email , password)=>{
        // setLoding(true)
        return signInWithEmailAndPassword(auth,email , password)
    }
    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth , CurrentUser => {
              setUser(CurrentUser)
              setLoding(false)
        })
        return()=>{
            return unsubcribe()
        }
        
    },[])

    const authInfo ={
        user, creatUser, singIn, logOut, loding
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;