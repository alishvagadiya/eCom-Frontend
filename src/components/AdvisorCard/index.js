import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./index.css"
import { useData, useAuth } from "../../context"
const url = process.env['REACT_APP_ECOM_BACKEND_URL'];

// export default function AdvisorCard({ advisor }) {
export default function AdvisorCard({ advisor }) {
  // console.log("AdvisorCard", advisor);
  const { _id, _id: advisorId, name, price, rating, yearsOfExperience
    , location, profile_URL, showCategoryType } = advisor
  const { cart, dataDispatch,
  } = useData();
  const { token, userDetails } = useAuth();
  console.log(userDetails);
  const navigate = useNavigate();

  const isInCart = cart?.find((cartItem) => cartItem._id === advisor._id);

  // advisorCartHandler
  const advisorCartHandler = async (e) => {
    e.preventDefault();
    console.log({ loc: "advisorCard.advisorCartHandler", advisorId: advisorId });
    if (!token) {
      alert("Please Login First");
      navigate("/Login");
    }
    if (isInCart) {
      navigate("/cart");
    } else {
      try {
        const response = await axios.post(
          `${url}/cart`,
          {
            advisor: advisorId,
            month: 1,
          }
        );
        const { success, message } = response.data
        if (success) {
          // console.log({ user, token, success, message })
          dataDispatch({ type: "ADD_TO_CART", payload: advisor });
        } else {
          console.log({ success, message })
          // return { success, message };
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="advisorContainer" >
      <div className="advisorImgBlock">
        <Link className="advisorDetailsLink" to={`/AdvisorDetail/${_id}`}>
          <img className="advisorImg" src={profile_URL} alt="Representatives presentation" />
        </Link>
      </div>
      <div className="advisorDetails">
        <h2 >
          <Link className="advisorDetailsLink" to={`/AdvisorDetail/${_id}`}> {name}{showCategoryType} </Link>
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
        <p className="bookingActionBox">
          {/* <input className="bookingInput" type="number" value="1"></input> */}
          <button className="bookingBtn" onClick={(e) => advisorCartHandler(e)} value={advisorId}>Book Now</button>
        </p>
      </div>
    </div>
  );
}