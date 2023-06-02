import {useState, useEffect} from "react";
import "./Documentation.css";
import { HOST_SERVER } from "../config";
import React  from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const StandingsTable = ({standings}) =>{
    return (
        <div className = "table-container">
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
const PlayersTable = ({players}) =>{
  return (
    <div className = "table-container">
      <h2>Players Table</h2>
      <table className="standings-table">
        <thead>
          <tr>
            <th>Player name</th>
            <th>Team</th>
            <th>Kit number</th>
            <th>Appearance</th>
            <th>Goals</th>
            <th>Position</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
      {players.map((player, index) => (
        <tr key={index}>
          <td>{player.player_name}</td>
          <td>{player.team_name}</td>
          <td>{player.kit_number}</td>
          <td>{player.appearance}</td>
          <td>{player.goals}</td>
          <td>{player.position}</td>
          <td>{player.age}</td>
        </tr>
      ))}
    </tbody>
      </table>
    </div>
  );
}
//Component using React Syntax Highlighter to display code 
const CodeSection = ({ code }) => {
  return (
    <SyntaxHighlighter language="javascript" style={materialLight}>
      {code}
    </SyntaxHighlighter>
  );
};

/**
 * 
 * MAIN SECTION OF CODE FOR DOCUMENTATION COMPONENT
 * 
 * 
 */


export function Documentation(){
    const [standings, setStandings] = useState([]);
    const [players, setPlayers] = useState([]);
    const [numPlayers,setNumPlayers] = useState("");
    const [teamPlayers, setTeamPlayers] = useState([]);
    const [teamName, setTeamName] = useState("");
    
    const [errorMessage1, setErrorMessage1] = useState(false);
    const [errorMessage2, setErrorMessage2] = useState(false);

    const handleInputChange = (event) => {
      const value = event.target.value;

      setNumPlayers(value);

    };

    const handleInputTeamName = (event) =>{
      const value = event.target.value;
      setTeamName(value);
    }


    const JSgetPlayers = `try {
      const response = await fetch(HOST_SERVER/players,{
        method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({key: #numPlayers})
      });
      const result = await response.text();
      console.log(result);
    }catch (error){
      console.log(error);
    }`;

    const getPlayers = async () =>{
      if (numPlayers < 0){
        setErrorMessage1(true);
        return;
      }
      setErrorMessage1(false);
      try{
        let response = await fetch(HOST_SERVER+ "players", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({key: numPlayers})
        });
        let data = await response.json();
        setPlayers(data);
      }catch (error){
        console.log(error);
      }
    };

    const JSgetStanding = `try {
      const response = await fetch(HOST_SERVER/standings,options);
      const result = await response.text();
      console.log(result);
    }catch (error){
      console.log(error);
    }`;

    const getStanding = async () =>{
        try{
            let response = await fetch(HOST_SERVER+ "standings");
            let data = await response.json();
            setStandings(data.message);
        
        }catch(error){
            console.log("error");
        }
    };
    const JSgetTeamPlayers = `try {
      const response = await fetch(HOST_SERVER/teamPlayers,{
        method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({key: #teamName})
      });
      const result = await response.text();
      console.log(result);
    }catch (error){
      console.log(error);
    }`;

    const getTeamPlayers = async () => {
      try{
        let response = await fetch(HOST_SERVER+"teamPlayers", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({key: teamName})
        });
        let data = await response.json();
        if (data.length == 0){
          setErrorMessage2(true);
          return;
        }
        setTeamPlayers(data);
        setErrorMessage2(false);
      }catch(error){
        console.log("error");
      }
    }

    const clearPlayers = () =>{
      setPlayers([]);
    }
    const clearStanding = () =>{
      setStandings([]);
    }
    const clearTeams = () =>{
      setTeamPlayers([]);
    }

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
        <h3>Demo</h3>

        <h4>Getting current standings table</h4>
        <button onClick ={getStanding}>Get Standings</button>
        <button onClick ={clearStanding}>Cleared</button>
        <div className = "demo-section">
          <CodeSection code={JSgetStanding} className = "code-section"/>
          <pre className = "table-section">
              <StandingsTable standings = {standings}/>
          </pre>
        </div>
        
        <h4>Getting list of players in the league with limit</h4>
        <input type="text" id="myTextBox" onChange={handleInputChange} required min ={0} placeholder="Enter number of players:" />
        {errorMessage1 && <p className="error">Invalid value, value cannot be negative</p>}
        <button onClick ={getPlayers}>Get Players</button>
        <button onClick ={clearPlayers}>Cleared</button>
        <div className = "demo-section">
          <CodeSection code={JSgetPlayers} className = "code-section" />
          <pre className = "table-section">
            <PlayersTable players = {players}/>
          </pre>
        </div>

        <h4>Getting list of players with user inputed team name</h4>
        <input type="text" id="myTextBox" onChange={handleInputTeamName}  placeholder="Enter team name:" />
        {errorMessage2 && <p className="error">Team doesn't exist, please check spellings, including capitalise letters</p>}
        <button onClick ={getTeamPlayers}>Get teams</button>
        <button onClick ={clearTeams}>Cleared</button>
        <div className = "demo-section">
          <CodeSection code={JSgetTeamPlayers} className = "code-section" />

          <pre className = "table-section" >
            <PlayersTable players = {teamPlayers}/>
          </pre>
        </div>

        

        </>
    )
}