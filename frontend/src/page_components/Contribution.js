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

    /**Using map to store user changes in batches, when user hit save, map is send to endpoint API 
     * Data structure: Map<team_name, Map<column,value>>
     * 
     * 
     * NOT WORKING YET, INNER MAP not updated properly
    */
    const changes = new Map();
    const onChangeInput =  (e, team_name, column) => {
        const {value} = e.target;


        if (value !== ""){
            if (changes.has(team_name)){
                let column_map = changes.get(team_name);
                column_map.set(column,value);
    
            }else{
                let new_column = new Map();
                new_column.set(column,value);
                changes.set(team_name,new_column);
            }
            console.log(changes.values());
        }

        
        

        if (value < 0){
            alert('value cannot be negative');
        }
        setSaveMode(false);
        const editData = standings.map((item) => 
        item.team_name === team_name ? {...item, [column]:value}: item);
        setStandings(editData);
        
      
    }
    const toggleEditMode = () =>{
        setEditMode(!editMode);
    }
    /**Once user hit save, frontend will send entire table queries back to backend to be process
     * Instead of sending entire table, we keep track of the rows, and each time user click save,
     * only send back that updated rows using the team_name keys.
     * Granular update only
     */
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



