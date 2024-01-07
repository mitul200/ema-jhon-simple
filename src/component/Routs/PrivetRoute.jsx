import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const {user,loding} = useContext(AuthContext)
    const location = useLocation()
    console.log(location);
    if(loding){
        return <div>Loding...</div>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from : location}} replace></Navigate>
};

export default PrivetRoute;