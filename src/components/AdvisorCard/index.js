// import { Link } from "react-router-dom";
import "./index.css"
export default function App({
  id,
  name,
  price,
  rating,
  yearsOfExperience,
  location,
  profile_URL,
  showCategoryType
}) {
  return (
    <>
      <div className="advisorImgBlock">
        <img className="advisorImg" src={profile_URL} alt="Representatives presentation" />
      </div>
      <div className="advisorDetails">
        <h2 className="advisorName">{name}{showCategoryType}</h2>
        <p>
          <span className="key">Experienced:</span>
          <span className="value">{yearsOfExperience} years</span>
        </p>
        <p>
          <span className="key">Charges:</span>
          <span className="value">${price}</span>
        </p>
        <p>
          <span className="key">Rating:</span>
          <span className="value">{rating}</span>
        </p>
        <p>
          <span className="key">Location:</span>
          <span className="value">{location}</span>
        </p>
        <button className="advisorBooking">Book Now</button>
      </div>
    </>
  );
}