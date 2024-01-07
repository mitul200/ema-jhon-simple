import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handelLogOut=()=>{
    logOut()
    .then(()=>{})
    .catch(error =>{
        console.log(error);
    })
  }
  return (
    <nav className="Header">
      <img src={logo} alt="" />
      <div>
        <Link to="/">shop</Link>
        <Link to="/orders">orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">login</Link>
        <Link to="/singup">Sing up</Link>
        {user && <span className="text-white">wellcom : {user.email}<button className="logOut-btn" onClick={handelLogOut}>Log Out</button></span>}
      </div>
    </nav>
  );
};

export default Header;
