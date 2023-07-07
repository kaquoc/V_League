import React, {useState, useEffect}  from 'react';
import { HOST_SERVER } from '../config';


export function Contribution(){
    const [standings, setStandings] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [saveMode, setSaveMode] = useState(false);

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
        if (value < 0){
            alert('value cannot be negative');
        }
        setSaveMode(false);
        const editData = standings.map((item) => 
        item.team_name === team_name ? {...item, [cell]:value}: item);
        setStandings(editData);
        
      
    }
    const toggleEditMode = () =>{
        setEditMode(!editMode);
    }
    const saved = () => {
        setSaveMode(true);
    }

    return (
        <>
        <h2>Contribute</h2>
        
        <button onClick={toggleEditMode}>
          {editMode ? 'Finish Editing' : 'Start Editing'}
        </button>
        <button onClick ={saved}>
            {saveMode? 'Saved': 'Save'}
        </button>

        {!saveMode && <p>Warning: File not saved!</p>} 
        
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
                        <input value = {team.match_played} type = "text" onChange={(e) => onChangeInput(e, team.team_name, "match_played")}  placeholder = "0"/>
                        : team.match_played}       
                    </td>
                    <td>
                        {editMode?
                        <input value = {team.points} type = "text" onChange={(e) => onChangeInput(e, team.team_name, "points")} placeholder = "0" />
                        : team.points}
                    </td>
                    <td>
                        {editMode?
                        <input value = {team.wins} type = "text" onChange={(e) => onChangeInput(e, team.team_name, "wins")} placeholder = "0" />
                        :team.wins}
                    </td>

                    <td>
                        {editMode?
                        <input value = {team.draw} type = "text" onChange={(e) => onChangeInput(e, team.team_name, "draw")} placeholder = "0" />
                        :team.draw}
                    </td>
                    <td>
                        {editMode?
                        <input value = {team.lose} type = "text" onChange={(e) => onChangeInput(e, team.team_name, "lose")} placeholder = "0" />
                        :team.lose}
                    </td>

                    </tr>
                ))}
             </tbody>
          </table>
        </div>

        </>
    )

}



