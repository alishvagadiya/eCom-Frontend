import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./index.css"
import { useData, useAuth } from "../../context"
// import { useAuth } from "../../context"
const url = process.env['REACT_APP_ECOM_BACKEND_URL'];

export default function CartCard({ cartItem }) {
  console.log("CartCardComp.start", cartItem);
  const { _id: advisorId, name, price, profile_URL, yearsOfExperience, rating, location, month } = cartItem
  // if (cartItem.advisor) {
  //   const { advisor } = cartItem
  //   const { _id: advisorId, name, price, profile_URL, month }
  // }
  // const { cart, dataDispatch } = useData();
  const { userDetails } = useAuth();
  const { dataDispatch } = useData();
  console.log(userDetails);

  const addMonth = async () => {
    try {
      console.log({ "loc": "cartCard.AddMonth", advisorId: advisorId });
      const response = await axios.post(
        `${url}/cart`,
        {
          advisor: advisorId,
          month: month + 1,
        }
      );
      const { success, message } = response.data
      if (success) {
        // console.log({ user, token, success, message })
        dataDispatch({ type: "ADD_MONTHS", payload: cartItem });
      } else {
        console.log({ success, message })
        // return { success, message };
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeMonth = async () => {
    try {
      console.log({ "loc": "cartCard.removeMonth", advisorId: advisorId });
      const response = await axios.post(
        `${url}/cart`,
        {
          advisor: advisorId,
          month: month - 1,
        }
      );
      const { success, message } = response.data
      console.log({ success, message })
      if (success) {
        dataDispatch({ type: "REMOVE_MONTHS", payload: cartItem });
      } else {
        console.log({ success, message })
        // return { success, message };
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="advisorCartContainer" id={advisorId} >
      <div className="advisorImgBlock">
        <img className="advisorImg" src={profile_URL} alt="Representatives presentation" />
      </div>
      <div className="advisorDetails">
        <h2 >
          {/* <Link className="advisorDetailsLink" to={`/AdvisorDetail/${_id}`}> {advisor.name}{showCategoryType} </Link> */}
          {name}
        </h2>
        <p>
          <span className="key">Experienced:</span>
          <span className="value">{yearsOfExperience} years</span>
        </p>
        <p>
          <span className="key">Charges:</span>
          <span className="value">${price} / Month</span>
        </p>
        <p>
          <span className="key">Rating:</span>
          <span className="value">{rating}</span>
        </p>
        <p>
          <span className="key">Location:</span>
          <span className="value">{location}</span>
        </p>
        <p className="cartActionBox">
          {/* <input className="bookingInput" type="number" value="1"></input>  <button className="bookingBtn" onClick={(e) => advisorCartHandler(e)} value={_id}>Book Now</button> */}

          <button onClick={removeMonth} className="decreaceBtn" >
            {cartItem.month === 1 ? "delete" : "remove"}
          </button>
          <span className="advisorMonth">{month}</span>
          <button onClick={addMonth} className="increaceBtn">Add </button>
        </p>
      </div>
    </div>
  );
}