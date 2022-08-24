## Commands for Heroku CLI

### Login to heroku from CLI

    heroku login

### using psql in Heroku CLI

    heroku pg:psql -a MyApplication

### view postgres database info

    heroku pg:info -a MyApplication


### Ubuntu Command Line for Setting Up PostgresSQL

Updating current repository for Ubuntu 
    sudo apt-get upgrade

Installing postgresSQL for Ubuntu
    sudo apt-get install postgresql postgresql-contrib

View action that can be done
    service postgresql

Setting postgresql to be online
    sudo /etc/init.d/postgresql start


### Using Heroku Postgres
connect using credentials listed on Heroku app.

