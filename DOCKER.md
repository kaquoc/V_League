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

    frontend: docker run -p 4000:3000 -v /Users/kaka/V_League/frontend:/app client
    backend:  docker run -p 4001:3001 -v  /Users/kaka/V_League/backend:/app server