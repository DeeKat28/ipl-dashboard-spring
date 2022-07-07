import "./MatchSmallCard.scss";
import React from "react";
import { Link } from "react-router-dom";

export const MatchSmallCard = ({ teamName, match }) => {
  if (!match) return null;
  const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
  const otherTeamLink = `/teams/${otherTeam}`;
  const IsMatchWon = teamName === match.matchWinner;

  return (
    <div
      className={
        IsMatchWon ? "MatchSmallCard won-card" : "MatchSmallCard lost-card"
      }
    >
      <span className='vs'>vs</span>
      <h1>
        <Link to={otherTeamLink}>{otherTeam}</Link>
      </h1>
      <p className='match-result'>
        {match.matchWinner} won by {match.resultMargin} {match.result}
      </p>
    </div>
  );
};
