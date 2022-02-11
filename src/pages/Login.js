import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context";
// import "./login.css"

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("Log In");
  // const [errorMessage, setErrorMessage] = useState("");
  const { login, loginStatus } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();


  useEffect(() => {
    // if already login navigate to home
    // console.log({ loginStatus });
    loginStatus && navigate("/")
  }, [loginStatus, navigate])

  async function loginHandler(e) {
    e.preventDefault();
    setLoading('Loging you in');
    const { success } = await login(email, password)
    if (success) {
      setLoading('Loged you in');
      console.log("login successfully");
      navigate(state?.from ? state.from : "/", { replace: true });
    } else {
      setLoading('Log In Again');
      console.log("login failed")
    }
  }
  return (
    <>
      <center>
        <h1 className="pageHeader"> Login </h1>
        <form>
          <div className="inputBox">
            <input type="email" placeholder="Enter Your Email id" value={email} onChange={(e) => setEmail(() => e.target.value)} />
          </div>
          <div className="inputBox">
            <input type="password" placeholder="Enter Your Password" value={password} onChange={(e) => setPassword(() => e.target.value)} />
          </div>
          <div className="inputBox">
            <button className="submitBtn" type="submit" onClick={(e) => loginHandler(e)} >{loading}</button>
          </div>
        </form>
      </center>
    </>
  );
}
