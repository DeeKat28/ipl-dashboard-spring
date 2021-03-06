import "./TeamPage.scss";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";

import { MatchDetailCard } from "../components/MatchDetailCard";
import { MatchSmallCard } from "../components/MatchSmallCard";

export const TeamPage = () => {
  const initialState = {
    matches: [],
  };

  const [team, setTeam] = useState(initialState);

  const { teamName } = useParams();

  useEffect(() => {
    document.title = `${teamName}`;
    const fetchTeam = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_ROOT_URL}/teams/${teamName}`
      );
      const data = await response.json();
      setTeam(data);
    };
    fetchTeam();
  }, [teamName]);

  return (
    <div className='TeamPage'>
      <div className='team-name-section'>
        <h2 className='home-header'>
          <Link to={{ pathname: "/" }}>Home</Link>
        </h2>
        <h1 className='team-name'>{team.teamName}</h1>
      </div>
      {!team.totalMatches || (
        <div className='win-loss-section'>
          Win / Losses
          <PieChart
            lineWidth={50}
            data={[
              {
                title: "Losses",
                value: team.totalMatches - team.totalWins,
                color: "#a34d5d",
              },
              {
                title: "Wins",
                value: team.totalWins,
                color: "#4da375",
              },
            ]}
          />
        </div>
      )}
      <div className='match-detail-section'>
        <h4>Latest Matches</h4>
        <MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
      </div>
      {team.matches.slice(1).map((match) => (
        <MatchSmallCard key={match.id} teamName={team.teamName} match={match} />
      ))}
      <div className='more-link'>
        <Link
          to={{
            pathname: `/team/${teamName}/matches/`,
            search: `year=${process.env.REACT_APP_DATA_END_YEAR}`,
          }}
        >
          More {">"}
        </Link>
      </div>
    </div>
  );
};
