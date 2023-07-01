DOCKER INSTRUCTION FILE

Project structure:

    V_League    |
                |
                |frontend |
                        | Dockerfile
                |
                |
                |backend  |
                        | Dockerfile


Docker command

To build, navigate to directory:

    frontend: docker build -t client
    backend:  docker build -t server

To run, from any directory:

    frontend: docker run -d -p 4000:3000 -v /path/local/frontend:/app client
    backend:  docker run -d -p 4001:3001 -v  /path/local/backend:/app server



In the build commands, the `-t` flag is used to tag the Docker image with a name. The `./frontend` and `./backend` paths specify the directories containing the Dockerfiles. 


In the run commands, the `-p` flag is used to map the host port to the container port. The `-v` flag is used to mount the host directory to the container directory, allowing for code synchronization and updates. The `-d` flag is for detached, is used to run the container in the background.


`-v /path/local/frontend:/app client`. This part of the command creates a volume mount, allowing the code directory on the host machine to be accessible within the container at the /app directory. This enables real-time synchronization and updates between the host machine and the running container for the backend code. 
