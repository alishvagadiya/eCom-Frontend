import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react"
import { dataReducer, initialDataState } from "../Reducer/DataReducer";
import { useAuth } from "./auth"
const url = process.env['REACT_APP_ECOM_BACKEND_URL'];

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export function DataProvider({ children }) {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);
  // console.log({ location: "dataContext.useAuth", dataState });
  const { userDetails, token } = useAuth();
  console.log({ location: "dataContext.useAuth", userDetails, token });
  // const [loading, setLoading] = useState("Log In");
  // const [errorMessage, setErrorMessage] = useState("");
  // const { login, loginStatus } = useAuth();


  const fetchData = async () => {
    try {
      const advisorResponse = await axios.get(`${url}/advisor`);
      const { advisor: allAdvisor, success, message } = advisorResponse.data

      if (success) {
        console.log({ location: "dataContext.fetchData", allAdvisor, success, message });
        dataDispatch({
          type: "INITIALIZE_ADVISORS",
          payload: {
            allAdvisor: allAdvisor,
          },
        });
      } else {
        console.log({ location: "dataContext.fetchData", success, message });
      }
    } catch (error) {
      console.log({ code: 'context.fetchData', error })
    }
  };


  useEffect(() => {
    dataState.allAdvisor.length === 0 && fetchData();
    dataState.allAdvisor.length === 0 && console.log("fetching advisors");
  }, [dataState.allAdvisor]);

  useEffect(() => {
    // token && fetchCartData();
    token && console.log("fetching fetchCartData");
    if (token) {
      const fetchCartData = async () => {
        try {
          const responseCart = await axios.get(
            `${url}/cart/`
          );
          console.log({ location: "dataContext.fetchCartData", cart: responseCart.data.cart });
          dataDispatch({
            type: "INITIALIZE_CART",
            payload: {
              cart: responseCart.data.cart,
            },
          });
        } catch (error) {
          console.log(error);
        }
      };
      fetchCartData();
    }
  }, [token]);

  return (
    <DataContext.Provider
      value={{
        // fetchData,
        allAdvisor: dataState.allAdvisor,
        // genres: state.genres,
        cart: dataState.cart,
        cartTotal: dataState.cartTotal,
        // cartTotalFinal: state.cartTotalFinal,
        // wishlist: state.wishlist,
        // showFastDeliveryOnly: state.showFastDeliveryOnly,
        // showCashOnDeliveryOnly: state.showCashOnDeliveryOnly,
        // sortParameter: state.sortParameter,
        dataDispatch,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
