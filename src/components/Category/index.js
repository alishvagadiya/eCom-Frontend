import { Link } from "react-router-dom";
import "./index.css"
export default function App() {
  return (<div className="container">
    <h1 className="categoryHeading">Category</h1>
    <div className="categoryBlock">
      <Link className="category" to={`category/Stock Market`}>Stock Market</Link>
      <Link className="category" to={`category/Mutual Fund`}>Mutual Fund</Link>
      <Link className="category" to={`category/Financial Planning`}>Finance Planning</Link>
      <Link className="category" to={`category/Insurance`}>Insurance</Link>
    </div>
  </div>
  );
}