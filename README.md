# V_League
API for Vietnamese Football League
https://morioh.com/p/6b88cda7e2fd


local server: http://localhost:3000/


## Using PE(R)N stack

- PostgreSQL for database holding V-Leauge information: fixtures, teams, players,...

- Express.js to build the API.

- Node.js for handling server-side environment.

- No front-end so no React


### GitHub Branches

Currently only have one 'main' branch as the master working branch.

In collaboration with other people, I will need other branches.

Its time to branch out.

clarification: fork vs branch

fork: when you create your own copy of the code on your local machine and in your GitHub repository. Its yours.

branch: working on branch means you are sharing with other user. When you push to the branch, the other user can see as well.

A test branch call 'dev', where collaborator would work on before submitting a pull request

Features will be work on dev branch, once consider stable, it can be merge onto the main branch by creating a pull request. 

### API GET command

    /GET/standings       - return the current standing table sorted by points

    /GET/teams           - return the teams in alphabetical order

    /GET/players         - return list of all players currently registered in the league

    /GET/players/"team_name"     - return list of all players currently in "team_name"

    /GET/fixtures        - return all fixtures in the league for 2022/2023 season


### Database
Our data is hosted on Heroku Postgres. 

Data is update manual on a per-game basis. Meaning we update results after each round. This should update other dependancies as well.
    




