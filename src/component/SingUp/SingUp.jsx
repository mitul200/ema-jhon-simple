import { useContext, useState } from "react";
import "./SingUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const SingUp = () => {
  const [error, setError] = useState("");
  const { creatUser } = useContext(AuthContext);
  console.log(creatUser);
  
  const handelSingUp = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      
      setError('')
     if (password.length < 6) {
      setError("Please provide 6 charates")
      return;
    }

    creatUser(email, password)
    .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message)
      });
  };
  return (
    <div className="form-container">
      <h1 className="form-title"> Sing Up</h1>
      <form onSubmit={handelSingUp}>
        <div className="form-contorl">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-contorl">
          <label htmlFor="Password">password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="form-contorl">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id=""  />
        </div>
        <button className="login-btn">Sing Up</button>
      </form>
        <p className="text-error">{error}</p>
        <p className="">
          Already have an account?{" "}
          <Link to="/login">
            <span className="creat-account-Link">Login</span>
          </Link>
        </p>
    </div>
  );
};

export default SingUp;
