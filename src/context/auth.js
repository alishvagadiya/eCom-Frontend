import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react"
const url = process.env['REACT_APP_ECOM_BACKEND_URL'];

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isLoggedIn, token: localToken } = JSON.parse(localStorage.getItem("ecom_login")) || { isLoggedIn: null, token: null }

  const [loginStatus, setLoginStatus] = useState(isLoggedIn);
  const [token, setToken] = useState(localToken);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    console.log({ location: "authContext.useEffect.start", loginStatus, token, userDetails, length: userDetails.length });
    if (loginStatus && token && userDetails.length === 0)
      if (loginStatus && token && userDetails.length === 0) {
        async function setUserData() {
          try {
            // console.log(`${url}/userdetails`);
            const response = await axios.get(`${url}/userdetails`);
            const { userDetails: userDetailsDb, success, message } = response.data
            if (success) {
              console.log({ location: "authContext.useEffect.dataFetched.if", userDetailsDb, success })
              setUserDetails(userDetailsDb)
              return { userDetailsDb, token, success, message };
            } else {
              console.log({ location: "authContext.useEffect.dataFetched.else", success, message })
              return { success, message };
            }
          } catch (error) {
            console.log({ code: 'context.signup', error })
            return { success: false, message: error.message, code: 'context.signup' };
          }
        }
        const data = setUserData().then(() => {
          console.log({
            location: "authContext.useEffect.set", data
          })
        });
      }
  }, [loginStatus, token, userDetails]);
  token && setAuthHeader(token);

  async function signup(name, email, password) {
    try {
      console.log(`${url}/signup`);
      const response = await axios.post(
        `${url}/signup`,
        {
          name,
          email,
          password,
        }
      );
      const { userDetails, token, success, message } = response.data
      if (success) {
        console.log({ userDetails, token, success, message })
        localStorage.setItem("ecom_login", JSON.stringify({ isLoggedIn: true, token: token }))
        setLoginDetails({ from: "signup", loginStatus: true, token, userDetails })
        return { userDetails, token, success, message };
      } else {
        console.log({ success, message })
        return { success, message };
      }
    } catch (error) {
      console.log({ code: 'context.signup', error })
      return { success: false, message: error.message, code: 'context.signup' };
    }
  }

  async function login(email, password) {
    try {
      console.log(`${url}/login`);
      const response = await axios.post(
        `${url}/login`,
        {
          email,
          password,
        }
      );
      const { userDetails, token, success, message } = response.data
      if (success) {
        console.log({ location: "authContext.login", userDetails, token, success, message })
        localStorage.setItem("ecom_login", JSON.stringify({ isLoggedIn: true, token: token, userDetails: userDetails }))
        setLoginDetails({ from: "login", loginStatus: true, token, userDetails })

        return { userDetails, token, success, message };
      } else {
        console.log({ success, message })
        return { success, message };
      }
    } catch (error) {
      console.log({ code: 'context.signup', error })
      return { success: false, message: error.message, code: 'context.signup' };
    }
  }

  async function setAuthHeader(token) {
    if (token) {
      return axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    axios.defaults.headers.common["Authorization"] = null;
  }
  async function setLoginDetails({ from, loginStatus, token, userDetails }) {
    setLoginStatus(loginStatus)
    setToken(token)
    setUserDetails(userDetails);
    console.log({ location: "authContext.setLoginDetails", from, loginStatus, token, userDetails })
  }

  async function logout() {
    localStorage.removeItem("ecom_login");
    setLoginDetails({ from: "logout", loginStatus: false, token: null, userDetails: {} })

    console.log(localStorage.getItem("ecom_login"));
  }

  return (
    <AuthContext.Provider value={{ loginStatus, token, userDetails, setLoginStatus, setToken, login, signup, logout }}>
      {children}
    </AuthContext.Provider >
  )
}

export function useAuth() {
  return useContext(AuthContext);
}
