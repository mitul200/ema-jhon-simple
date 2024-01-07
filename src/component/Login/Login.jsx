import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Login = () => {
    const {singIn} = useContext(AuthContext)
    const [show , setShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation()
    console.log(location);

    const from = location.state?.from?.pathname ||'/'
    const handelSingIn =(event)=>{

        event.preventDefault();

        const form = event.target;
        const email = form.email.value
        const password = form.password.value
    
        console.log(email,password);

        singIn(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            form.reset()
            navigate(from , {replace:'true'});
          })

          .catch((error) => {
           console.log(error);
          });

        
    }
  return (
    <div className="form-container">
      <h1 className="form-title"> Login page</h1>
      <form onSubmit={handelSingIn}>
        <div className="form-contorl">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-contorl">
          <label htmlFor="Password">password</label>
          <input type={show? 'text':"password"} name="password" id="" required />
          <p onClick={()=>setShow(!show)}><small>
            {
                show ? <span>Hide pass</span> : <span>show pass</span>
            }
            </small></p>
        </div>
        <button className="login-btn">Login</button>
      </form>
        <p className="">
          New to Ema-john?{" "}
          <Link to="/singup">
            <span className="creat-account-Link"> Create New Account</span>
          </Link>
        </p>
    </div>
  );
};

export default Login;
