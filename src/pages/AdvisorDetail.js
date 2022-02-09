import React from "react";
import { useParams } from "react-router-dom";
import advisorsDB from "../data/advisorsDB";
import { AdvisorDetailCard } from "../components";

export default function AdvisorDetail() {

  const { advisorId } = useParams();

  function getAdvisorDetails(advisors, advisorId) {
    return advisors.find((advisor) => advisor.id === advisorId);
  }

  const advisor = getAdvisorDetails(advisorsDB.data, advisorId);

  return (
    <AdvisorDetailCard {...advisor} />
  );

}
