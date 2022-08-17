//Postgre SQL
import pg from 'pg';


const {Pool} = pg;

//dependent on where we are running the server: either Heroku or local

//currently running local with PostGres user kaka and database vleague with table mock_data
const poolConfig2 = {
    user: "kaka",
    password: '',
    host: 'localhost',
    database: 'vleague',
    port: 5432
};

//config to run with Heroku Postgres. 
const poolConfig = {
    connectionString: process.env.DATABASE_URL,
    //HerokuPostgres requires SSL connection to be made. setting rejectUnauthorized to false means we are bypassing this
    //https://stackoverflow.com/questions/61097695/self-signed-certificate-error-during-query-the-heroku-hosted-postgres-database
    ssl: {
        rejectUnauthorized: false
    }
}


//pool object that we can export
const pool = new Pool(poolConfig);


export default pool;


