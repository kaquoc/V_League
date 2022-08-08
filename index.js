import express, {json} from "express";
import cors from 'cors'; //communication between express and server

//import pool from './db.js' //database

const app = express();
const PORT = process.env.port || 3000;
//if we running on a cloud server (e.g Heroku), then its dependent on the environemnt,else fallback on port 5000
const corsOption = {origin: '*'}; //anyone can use our API

app.use(cors(corsOption));

app.use(json()); //middleware body parser

//reponse to a GET request
app.get("/",(req,res) => {
    res.json("Hello");
})

app.listen(PORT, () => {
    console.log("server is listen on port: ${PORT}")
});
    



