import { Link } from "react-router-dom";
import "./index.css"
export default function App({
  id,
  name,
  price,
  rating,
  category,
  yearsOfExperience,
  location,
  wfh,
  profile_URL,
  details
}) {
  console.log("category ", category);
  let categoryStr = category.join(', ');

  return (
    <>
      <center>
        <div className="advisorDetailCard">
          <div className="advisorHeader">
            <div className="advisorImgBlock">
              <img className="advisorImg" src={profile_URL} alt="Representatives presentation" />
            </div>
            <div className="advisorDetails">
              <h2 className="advisorName">{name}</h2>
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
              <p>
                <span className="key">Work From Home:</span>
                <span className="value">{wfh}</span>
              </p>
              <button className="advisorBooking">Book Now</button>
            </div>
          </div>
          <div className="advisorBody">
            <div className="hr"></div>
            <p className="advisorExpertise">
              <span className="key">category:</span>
              <span className="value">{categoryStr}</span>
            </p>
            <div className="hr"></div>
            <p className="advisorDescription"> {details}</p>
          </div>
        </div>
      </center>
      <center className="showAllBlock">
        <Link className="showAll" to="/category"> See All </Link>
      </center>
    </>
  );
}