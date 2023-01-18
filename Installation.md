### Ubuntu Command Line for Setting Up PostgresSQL

Updating current repository for Ubuntu 
    sudo apt-get upgrade

Installing postgresSQL for Ubuntu
    sudo apt-get install postgresql postgresql-contrib

View action that can be done
    service postgresql

Setting postgresql to be online
    sudo /etc/init.d/postgresql start


### POSTGRES (local) commands

connect to database

    psql postgres

commands in psql starts with \

    postgres=# \conninfo

    other commands:
    \q: Exit psql connection
    \c: Connect to a new database
    \dt: List all tables
    \du: List all roles
    \list: List databases

DATABASE commands

    CREATE DATABASE *dbname*;
    \list - view availiable databases
    \c *dbname*  - connect to database *dbname

TABLE commands (normal SQL commands)

    CREATE TABLE users (
    ID SERIAL PRIMARY KEY,
    name VARCHAR(30),
    email VARCHAR(30)
    );