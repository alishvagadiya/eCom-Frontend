import { useEffect } from "react";
import { AdvisorCard } from "../components";
// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useData } from "../context";
export default function Category() {

  const { showCategoryType } = useParams();
  const { allAdvisor, fetchData } = useData();
  // console.log({ useData });


  useEffect(() => {
    if (allAdvisor === null) {
      fetchData();
    }
  }, [allAdvisor, fetchData])
  return (
    <>
      <h1 className="pageHeader"> {showCategoryType} Advisors </h1>
      <div className="advisorList">
        {
          allAdvisor.map((advisor) => {
            // console.log("categoryPage", advisor);
            return (showCategoryType === 'All') ?
              // <Link Link className="advisorContainer" to={`/AdvisorDetail/${advisor._id}`}> <AdvisorCard {...advisor} key={advisor._id} />  </Link>
              // : (advisor.category.indexOf(showCategoryType) > -1) ?
              //   <Link className="advisorContainer" to={`/AdvisorDetail/${advisor._id}`}>  <AdvisorCard {...advisor} key={advisor._id} />  </Link> : ''
              <AdvisorCard advisor={advisor} key={advisor._id} />
              : (advisor.category.indexOf(showCategoryType) > -1) ?
                <AdvisorCard advisor={advisor} key={advisor._id} /> : ''
          }
          )
        }
      </div>
    </>
  );
}
