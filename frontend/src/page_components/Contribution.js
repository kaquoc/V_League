import React, {useState, useEffect}  from 'react';
import { HOST_SERVER } from '../config';


export function Contribution(){
    const [standings, setStandings] = useState([]);
    useEffect(() => {
        getStanding();
      }, []);

    const getStanding = async () =>{
        try{
            let response = await fetch(HOST_SERVER+ "standings");
            let data = await response.json();
            setStandings(data.message);
        
        }catch(error){
            console.log("error");
        }
    };

    const onChangeInput =  (e, team_name, cell) => {
        const {value} = e.target;
        console.log("name", team_name);
        console.log("value", value);
        console.log("cell", cell)
        
        const editData = standings.map((item) => 
        item.team_name === team_name ? {...item, cell:value}: item);
        setStandings(editData);
    }
    return (
        <>
        <h2>Contribute</h2>

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
                    <tr key={team.team_name}>
                    <td>{team.team_name}</td>


                    <td>
                        <input value = {team.team_match_played} type = "text" onChange={(e) => onChangeInput(e, team.team_name, "team_match_played")} placeholder = "0" />
                    </td>
                    <td>
                        <input value = {team.team_points} type = "text" onChange={(e) => onChangeInput(e, team.team_name, "team_points")} placeholder = "0" />
                    </td>
                    <td>{team.wins}</td>
                    <td>{team.draw}</td>
                    <td>{team.lose}</td>
                    </tr>
                ))}
             </tbody>
          </table>
        </div>

        </>
    )

}



