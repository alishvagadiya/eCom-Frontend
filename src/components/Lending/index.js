import "./index.css"
import mainImg from '../../assets/Images/mainImg.svg'
export default function App() {
  return (<div className="container">
    <div className="mainBlock">
      <div>
        <h1>Find all wonders around Finance</h1>
        <span>Here is the list of all types of personal finance advisors subscription </span>
        <button className="exploreBtn"> Explore Now </button>
      </div>
      <div className="mainImgBlock">
        <img className="mainImg" src={mainImg} alt="Representatives presentation" />
      </div>
    </div>
  </div>
  );
}