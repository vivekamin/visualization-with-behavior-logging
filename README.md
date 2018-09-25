# docker-react-express
Youtube Video Link: https://www.youtube.com/watch?v=gWO4xjs-mDo&feature=youtu.be

How to run the assignment:

    - Run the exetension

        - Chrome -> More Tools -> Extensions -> Load unpacked
        - Load `chrome-extension` folder

Run the full-stack(MERN) application:

    * If you are familiar with Docker Just follow the below commands based on OS

        - Dockerized MERN stack developement environment

        - For MacOS and Ubuntu
            - Install Docker
            - Run `docker-compose up`
            - Start coding!
            - Stop containers and removes volumes:  Run `docker-compose down -v` 

        - For Windows
            - Install Docker or DockerToolbox
            - If DockerToolbox, then clone the repo in C:/Users/[username], eg. C:/Users/suman
            - Change port-forward settings in Virtualbox
            (https://www.jhipster.tech/tips/020_tip_using_docker_containers_as_localhost_on_mac_and_windows.html)
            - Run `docker-compose up`
            - Start coding!
            - Stop containers and removes volumes:  Run `docker-compose down -v`

    * After running `docker-compose up` go to `localhost:3000` which is front-end       application and you are good to go

    * If not using with docker
        - Install MongoDB
        - Set DATA folder in the `docker-react-express` as database for it
        - go to `express-server` do npm start(as I have sent the node modules also)
        - go to `react-client` do npm start
        - go to `localhost:3000`




