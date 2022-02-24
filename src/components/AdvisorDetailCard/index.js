import { Link, useParams } from "react-router-dom";
import { useData } from "../../context";
import "./index.css"
export default function AdvisorDetailCard() {
  const { advisorId } = useParams();
  const { allAdvisor } = useData();
  console.log({ allAdvisor });
  const advisor = allAdvisor.find((advisor) => advisor._id === advisorId);

  const { _id,
    name,
    price,
    rating,
    category,
    yearsOfExperience,
    location,
    wfh,
    profile_URL,
    details } = advisor
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
              <p className="bookingActionBox">
                {/* <input className="bookingInput" type="number" value="1"></input> */}
                <button className="bookingBtn" value={_id}>Book Now</button>
              </p>
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
        <Link className="showAll" to="/category/All"> See All </Link>
      </center>
    </>
  );
}