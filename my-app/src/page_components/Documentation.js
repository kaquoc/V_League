import {useState, useEffect} from "react";
import "./Documentation.css";
import { HOST_SERVER } from "../config";


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
const PlayersTable = ({players}) =>{
  return (
    <div>
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

export function Documentation(){
    const [standings, setStandings] = useState([]);
    const [players, setPlayers] = useState([]);
    const [numPlayers,setNumPlayers] = useState("");
    const [teamPlayers, setTeamPlayers] = useState([]);
    const [teamName, setTeamName] = useState("");

    const handleInputChange = (event) => {
      const value = event.target.value;
      setNumPlayers(value);
      if (value < 0){
        alert("Please enter a value larger than 0");
      }
    };

    const handleInputTeamName = (event) =>{
      const value = event.target.value;
      setTeamName(value);
    }

    const getPlayers = async () =>{
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

    const getStanding = async () =>{
        try{
            let response = await fetch(HOST_SERVER+ "standings");
            let data = await response.json();
            setStandings(data.message);
        
        }catch(error){
            console.log("error");
        }
    };
    
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
          alert("Team doesn't exist");
        }
        setTeamPlayers(data);
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
        <h3>Code Example</h3>


        <button onClick ={getStanding}>Get Standings</button>
        <button onClick ={clearStanding}>Cleared</button>
        <pre>
            <StandingsTable standings = {standings}/>
        </pre>


        <input type="text" id="myTextBox" onChange={handleInputChange} required min ={0} placeholder="Enter number of players:" />
        <button onClick ={getPlayers}>Get Players</button>
        <button onClick ={clearPlayers}>Cleared</button>
        <pre>
           <PlayersTable players = {players}/>
        </pre>

        <input type="text" id="myTextBox" onChange={handleInputTeamName}  placeholder="Enter team name:" />
        <button onClick ={getTeamPlayers}>Get teams</button>
        <button onClick ={clearTeams}>Cleared</button>
        <pre>
           <PlayersTable players = {teamPlayers}/>
        </pre>
        </>
    )
}