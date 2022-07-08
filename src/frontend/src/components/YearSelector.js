import "./YearSelector.scss";
import React from "react";
import { Link } from "react-router-dom";

export const YearSelector = ({ teamName }) => {
  const years = [];

  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;

  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }

  return (
    <ol className='YearSelector'>
      {years.map((year) => (
        //   <Link to={`/team/${teamName}/matches/?year=${year}`}>
        <Link
          to={{
            pathname: `/team/${teamName}/matches/`,
            search: `year=${year}`,
          }}
        >
          <li>{year}</li>
        </Link>
      ))}
    </ol>
  );
};