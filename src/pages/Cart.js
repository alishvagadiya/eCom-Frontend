
// import { useNavigate } from "react-router-dom";
import { useData } from "../context";
import { CartCard } from "../components";
import "./cart.css";
// import rightArrow from "../../assets/images/right_arrow.svg";

export default function Cart() {
  const { cart, cartTotal } = useData();
  console.log({ location: "cartPage.Cart", cart, cartTotal });
  return (
    <div className="container">
      <h1>Cart</h1>
      {/* {cart?.length ? ( */}
      <div className="cartBlock mt-8">
        <div className="cartCardContainer">
          {/* {cart && cart.map((cartItem) => { */}
          {cart.map((cartItem) =>
            // console.log({ "loca": "cartPage.Cart", cartItem });
            <CartCard cartItem={cartItem} />
            // <advisorCard data={cartItem} />
          )}
        </div>
        <div className="checkoutBox">
          <div className="shippingCost">
            <span>SHIPPING COST:</span>
            <span>+ ₹ 20</span>
          </div>
          <div className="subTotal"
          >
            <strong>TOTAL:</strong>
            <strong>
              ₹ {parseFloat(cartTotal + 20).toFixed(2)}
            </strong>
          </div>
          <div className="space-y-1"></div>
          <button
            className="checkoutBtn"
          >
            Proceed to checkout
            <img
              alt=""
              // src={rightArrow}
              className="material-icons-outlined btn-icon-right arrowIcon"
            />
          </button>
        </div>
      </div >

    </div >
  );
}

// function EmptyCart() {
//   const navigate = useNavigate();
//   return (
//     <div className="flex flex-col h-full items-center">
//       <h2>Your cart is empty</h2>
//       <button
//         className="btn btn-solid btn-large mt-8 checkoutBtn"
//         onClick={() => navigate("/")}
//       >
//         Start Shopping
//         <img
//           alt=""
//           // src={rightArrow}
//           className="material-icons-outlined btn-icon-right arrowIcon"
//         />
//       </button>
//     </div>
//   );
// }
