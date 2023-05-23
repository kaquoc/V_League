import express, {json, raw} from "express";
import cors from 'cors'; //communication between express and server
import pool from './db.js' //database

const app = express();
const PORT = process.env.PORT || 3001; //for now localhost is hardcode at port 3001, port 3000 is for front-end

//if we running on a cloud server (e.g Heroku), then its dependent on the environemnt,else fallback on port 5000
const corsOption = {origin: process.env.URL || '*'}; //anyone can use our API

app.use(cors(corsOption));


app.use(raw()); //middleware body parser, use to process incoming Request into JSON String

//default intro page
//getting data from GET command, with http://localhost:3001/bob/99
app.get("/:name/:age", (req, res) => {
    //res.json({ message: "Hello from server!" });
    res.json({name: req.params.name, age: req.params.age});
  });

//reponse to a HTTP GET request
//retrieve table data from table "standings" that we created using HerokuPostgres.
app.get("/standings", async (req,res) => {
    try {
        const board = await pool.query("SELECT * FROM standings ORDER BY points DESC");
        res.json({message: board.rows});
    } catch (error) {
        console.log(error.message);
    }
})
app.get("/players", async (reg,res) => {
    try {
        const board = await pool.query("SELECT * FROM players LIMIT 100");
        res.json(board.rows);
    } catch (error) {
        console.log(error.message);
    }
})
app.post("/players",async (req,res) => {
    const request = req.body;
    console.log(request);
})
//Function for testing purposes, return server Information.
app.get("/server_info", async (reg,res) => {
    
    res.json("Server port number: " + PORT);
})
app.listen(PORT, () => {
    console.log("server is listen on port: " + PORT);
});






