//Postgre SQL
import pg from 'pg';


const {Pool} = pg;

//dependent on where we are running the server: either Heroku or local
const poolConfig = {
    user: "kaka",
    password: '',
    host: 'localhost',
    database: 'vleague',
    port: 5432
};



//pool object that we can export
const pool = new Pool(poolConfig);

export default pool;


