import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context";
import "./index.css"
export default function App() {

  const { loginStatus, userDetails, logout } = useAuth();
  return (
    <>
      <nav className="navBlock">
        <h2>FinComm</h2>
        <ul className="navList">
          <li className="navLink">
            <Link to="/">Home</Link>
          </li>
          <li className="navLink">
            <Link to="/category/All">category</Link>
          </li>
          <li className="navLink">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="navLink">
            <Link to="/WishList">WishList</Link>
          </li>
          <li className="navLink">
            {
              loginStatus
                ? "Hi, " + userDetails.name
                : <Link to="/Signup">SignUp</Link>
            }
          </li>
          <li className="navLink">
            {
              loginStatus
                ? <Link to="/" onClick={() => {
                  logout()
                }}
                >
                  Logout
                </Link>
                : <Link to="/Login">Login</Link>
            }
          </li>
        </ul>
      </nav>
    </>
  );
}
