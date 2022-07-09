import "./MatchPage.scss";
import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

import { MatchDetailCard } from "../components/MatchDetailCard";
import { YearSelector } from "../components/YearSelector";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);

  const { teamName } = useParams();
  const [searchParams] = useSearchParams();
  const year = searchParams.get("year");

  useEffect(() => {
    document.title = `${teamName} ${year}`;
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      console.log(data);
      setMatches(data);
    };
    fetchMatches();
  }, [teamName, year]);

  return (
    <div className='MatchPage'>
      <div className='nav-section'>
        <h2>
          <Link to={{ pathname: "/" }}>Home</Link>
        </h2>
        <div className='year-section'>
          <h3>Select Year</h3>
          <YearSelector teamName={teamName} />
        </div>
      </div>
      <div>
        <h1 className='match-page-heading'>{`${teamName} matches in ${year}`}</h1>
        {matches.map((match) => (
          <MatchDetailCard key={match.id} teamName={teamName} match={match} />
        ))}
      </div>
    </div>
  );
};
