import React from "react";
import advisorsDB from "../data/advisorsDB";
import { AdvisorCard } from "../components";
import { Link, useParams } from "react-router-dom";

export default function Category() {

  const { showCategoryType } = useParams();

  return (
    <>
      <h1 className="pageHeader"> {showCategoryType} Advisors </h1>
      <div className="advisorList">
        {
          advisorsDB.data.map((advisor) => {
            return (showCategoryType === 'All') ?
              <Link Link className="advisorContainer" to={`/AdvisorDetail/${advisor.id}`}> <AdvisorCard {...advisor} />  </Link>
              : (advisor.category.indexOf(showCategoryType) > -1) ?
                <Link className="advisorContainer" to={`/AdvisorDetail/${advisor.id}`}>  <AdvisorCard {...advisor} />  </Link> : ''
          }
          )
        }
      </div>
    </>
  );
}
