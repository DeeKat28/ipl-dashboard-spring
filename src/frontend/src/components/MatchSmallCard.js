import React from "react";
import { Link } from "react-router-dom";

export const MatchSmallCard = ({ teamName, match }) => {
  if (!match) return null;
  const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
  const otherTeamLink = `/teams/${otherTeam}`;
  return (
    <div className='MatchSmallCard'>
      <p>
        VS <Link to={otherTeamLink}>{otherTeam}</Link>
      </p>
      <p>
        At {match.venue} on {match.date}
      </p>
      <p>
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </p>
    </div>
  );
};
