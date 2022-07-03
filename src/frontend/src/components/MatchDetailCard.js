import React from "react";
import { Link } from "react-router-dom";

export const MatchDetailCard = ({ teamName, match }) => {
  if (!match) return null;

  const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
  const otherTeamLink = `/teams/${otherTeam}`;

  return (
    <div className='MatchDetailCard'>
      <h2>
        VS <Link to={otherTeamLink}>{otherTeam}</Link>
      </h2>
      <h3>
        At {match.venue} on {match.date}
      </h3>
      <h5>
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </h5>
    </div>
  );
};
