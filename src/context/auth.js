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
    if (loginStatus && token) {
      async function setUserData() {
        try {
          console.log(`${url}/userdetails`);
          const response = await axios.get(`${url}/userdetails`);
          const { userDetails: userDetailsDb, success, message } = response.data
          if (success) {
            console.log({ userDetailsDb, success })
            setUserDetails(userDetailsDb)
            return { userDetailsDb, token, success, message };
          } else {
            console.log({ success, message })
            return { success, message };
          }
        } catch (error) {
          console.log({ code: 'context.signup', error })
          return { success: false, message: error.message, code: 'context.signup' };
        }
      }
      setUserData();
    }
  }, [loginStatus, token]);

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
      const { user, token, success, message } = response.data
      if (success) {
        console.log({ user, token, success, message })
        localStorage.setItem("ecom_login", JSON.stringify({ isLoggedIn: true, token: token }))
        return { user, token, success, message };
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
      const { user, token, success, message } = response.data
      if (success) {
        console.log({ user, token, success, message })
        localStorage.setItem("ecom_login", JSON.stringify({ isLoggedIn: true, token: token }))
        return { user, token, success, message };
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

  async function logout() {
    setLoginStatus(false)
    setToken(null)
    setUserDetails({});
    localStorage.removeItem("ecom_login");
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
