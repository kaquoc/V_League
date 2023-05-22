import {useState, useEffect} from "react";
 import "./Documentation.css";

const StandingsTable = ({standings}) =>{
    return (
        <div>
          <h2>Standings Table</h2>
          <table className="standings-table">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Matches Played</th>
                <th>Points</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Losses</th>
              </tr>
            </thead>
            <tbody>
          {standings.map((team, index) => (
            <tr key={index}>
              <td>{team.team_name}</td>
              <td>{team.match_played}</td>
              <td>{team.points}</td>
              <td>{team.wins}</td>
              <td>{team.draw}</td>
              <td>{team.lose}</td>
            </tr>
          ))}
        </tbody>
          </table>
        </div>
      );
}

export function Documentation(){
    const [standings, setStandings] = useState([]);

    const getStanding = async () =>{
        try{
            let data = await fetch("http://localhost:3001/standings");
            let data2 = await data.json();
            setStandings(data2.message);
            console.log(data2.message);
        }catch(error){
            console.log("error");
        }
    };

    return (
        <>
        <h2>Documentation</h2>
        <pre>
            <code>
            /GET/standings       - return the current standing table sorted by points<br></br>
            <br></br>
            /GET/teams           - return the teams in alphabetical order<br></br>
            <br></br>
            /GET/players         - return list of all players currently registered in the league<br></br>
            <br></br>
            /GET/players/"team_name"     - return list of all players currently in "team_name"<br></br>
            <br></br>
            /GET/fixtures        - return all fixtures in the league for 2022/2023 season<br></br>
            </code>
        </pre>
        <h3>Code Example</h3>
        <button onClick ={getStanding}>Get Standings</button>
        <pre>
            <StandingsTable standings = {standings}/>
        </pre>
        </>
    )
}