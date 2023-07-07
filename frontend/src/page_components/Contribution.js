import React, {useState, useEffect}  from 'react';
import { HOST_SERVER } from '../config';


export function Contribution(){
    const [standings, setStandings] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const {errorMessage,setErrorMsg} = useState("");

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
        const editData = standings.map((item) => 
        item.team_name === team_name ? {...item, [cell]:value}: item);
        setStandings(editData);
        
      
    }
    const toggleEditMode = () =>{
        setEditMode(!editMode);
        console.log("edit mode ", editMode);
    }

    return (
        <>
        <h2>Contribute</h2>
        
        <button onClick={toggleEditMode}>
          {editMode ? 'Finish Editing' : 'Edit'}
        </button>

        <p>{errorMessage}</p>
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
                        {editMode?
                        <input value = {team.match_played} type = "text" onChange={(e) => onChangeInput(e, team.team_name, "match_played")} />
                        : team.match_played}       
                    </td>
                    <td>
                        {editMode?
                        <input value = {team.points} type = "text" onChange={(e) => onChangeInput(e, team.team_name, "points")} placeholder = "0" />
                        : team.points}
                    </td>
                    <td>
                        <input value = {team.wins} type = "text" onChange={(e) => onChangeInput(e, team.team_name, "wins")} placeholder = "0" />
                    </td>
                    <td>
                        <input value = {team.draw} type = "text" onChange={(e) => onChangeInput(e, team.team_name, "draw")} placeholder = "0" />
                    </td>
                    <td>
                        <input value = {team.lose} type = "text" onChange={(e) => onChangeInput(e, team.team_name, "lose")} placeholder = "0" />
                    </td>

                    </tr>
                ))}
             </tbody>
          </table>
        </div>

        </>
    )

}



