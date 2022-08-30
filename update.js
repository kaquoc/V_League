/**File for updating database after each round
 * What needs to change after each round:
 *     - Standings table
 *          - team's point, wins, loses, draw, match_played
 *     - Players table
 *          - kit_number, player_name, team_name, appearance, goals, position, age.
 * 
 * 
 */
import pool from './db.js';

/** How to update player
 *  Player name -> find, 
*/
const updatePlayer_goal = async (player_name, goals) => {
    const query = `UPDATE "players" 
                   SET "goals" = goals + $2
                   WHERE "player_name" = $1`;
    try {
        await pool.connect();          // gets connection
        await pool.query(query, [player_name, goals]); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await pool.end();              // closes connection
    }
};
/**increament a player appearance 1 at a time */
const updatePlayer_appearance = async (player_name) => {
    const query = `UPDATE "players" 
                   SET "appearance" = appearance - 1
                   WHERE "player_name" = $1`;
    try {
        await pool.connect();          // gets connection
        await pool.query(query, [player_name]); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await pool.end();              // closes connection
    }
};



updatePlayer_appearance('Pham Tuan Hai').then(result => {  // userName, userRole, userId
    if (result) {
        console.log('player updated');
    }
});
