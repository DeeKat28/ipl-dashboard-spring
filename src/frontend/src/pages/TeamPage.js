import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {
  const initialState = {
    matches: [],
  };

  const [team, setTeam] = useState(initialState);

  const { teamName } = useParams();

  useEffect(() => {
    const fetchTeam = async () => {
      const response = await fetch(`http://localhost:8080/Team/${teamName}`);
      const data = await response.json();
      console.log(data);
      setTeam(data);
    };
    fetchTeam();
  }, [teamName]);

  return (
    <div className='TeamPage'>
      <h1>{team.teamName}</h1>
      <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      <h4>Latest Matches</h4>
      {team.matches.slice(1).map((match) => (
        <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />
      ))}
    </div>
  );
};
