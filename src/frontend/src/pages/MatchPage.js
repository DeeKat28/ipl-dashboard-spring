import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { MatchSmallCard } from "../components/MatchSmallCard";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);

  const { teamName } = useParams();
  const [searchParams] = useSearchParams();
  const year = searchParams.get("year");

  useEffect(() => {
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
      <h1>MatchPage</h1>
      {matches.map((match) => (
        <MatchSmallCard key={match.id} teamName={teamName} match={match} />
      ))}
    </div>
  );
};
