import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loading, setloading] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  const { loginStatus, signup } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // if already login navigate to home
    console.log({ loginStatus });
    // userDetails && navigate("/", { replace: true })
    loginStatus && navigate("/")
  }, [loginStatus, navigate])

  async function signupHandler(e) {
    e.preventDefault();
    // setloading('loading');
    const { success } = await signup(name, email, password)
    if (success) {
      console.log("signup successfully")
    } else {
      console.log("signup failed")
    }
  }
  return (
    <>
      <center>
        <h1 className="pageHeader"> SignUp </h1>
        <form>
          <div className="inputBox">
            <input className="formInput" type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(() => e.target.value)} />

          </div>
          <div className="inputBox">
            <input className="formInput" className="formInput" type="email" placeholder="Enter Your Email id" value={email} onChange={(e) => setEmail(() => e.target.value)} />
          </div>
          <div className="inputBox">
            <input className="formInput" type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(() => e.target.value)} />
          </div>
          <div className="inputBox">
            <button className="submitBtn" type="submit" onClick={(e) => signupHandler(e)} >Sign Up</button>
          </div>
        </form>
      </center>
    </>
  );
}
