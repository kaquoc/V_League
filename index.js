import express, {json} from "express";
import cors from 'cors'; //communication between express and server

import pool from './db.js' //database

const app = express();
const PORT = process.env.PORT || 3000;

//if we running on a cloud server (e.g Heroku), then its dependent on the environemnt,else fallback on port 5000
const corsOption = {origin: process.env.URL || '*'}; //anyone can use our API

app.use(cors(corsOption));

app.use(json()); //middleware body parser


//reponse to a HTTP GET request
//retrieve table data from table "standings" that we created using HerokuPostgres.
app.get("/standings", async (req,res) => {
    try {
        const board = await pool.query("SELECT * FROM standings");
        res.json(board.rows);
    } catch (error) {
        console.log(error.message);
    }
})


app.get("/hanoi", async (req,res) => {
    try {
        const board = await pool.query("SELECT * FROM standings WHERE team_name = 'Hanoi' ");
        res.json(board.rows);
    } catch (error) {
        console.log(error.message);
    }
})


app.listen(PORT, () => {
    console.log("server is listen on port: " + PORT);
});
    



