import "./HomePage.scss";

import React, { useEffect, useState } from "react";
import { TeamTile } from "../components/TeamTile";

export const HomePage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      const response = await fetch(`http://localhost:8080/teams`);
      const data = await response.json();
      setTeams(data);
    };
    fetchTeams();
  }, []);

  return (
    <div className='HomePage'>
      <h1 className='app-name'>IPL DashBoard</h1>
      <div className='team-grid'>
        {teams.map((team) => (
          <TeamTile teamName={team.teamName} />
        ))}
      </div>
    </div>
  );
};
