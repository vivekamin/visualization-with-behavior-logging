# Social visualization with behavior logging
![image](https://user-images.githubusercontent.com/25477734/48755954-7c342400-ec54-11e8-88f5-364b84dd9070.png)

## Project Description
#### Build a System to provide insight into user’s activity and interaction of StackOverflow. Logged interaction using chrome
extension and visualized those interactions using a Web Application developed using MongoDB, Express, React.js and Node.
The system consist two componenet, 
1) Chrome Extension
2) Full Stack Application


#### Using chrome extension, system logs different types of user behavior on Stackoverflow.com, this data then processed in Express App. User then can loggin to React application to explore and discover facts and patterns using Social Visualization. 


Youtube Video Link: https://www.youtube.com/watch?v=gWO4xjs-mDo&feature=youtu.be

## How to setup:

   - Chrome exetension

       - Chrome -> More Tools -> Extensions -> Load unpacked
       - Load `chrome-extension` folder

   - Full-stack(MERN) application:

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

        * After running `docker-compose up` go to `localhost:3000` which is front-end application and you are good to go

        * If not using with docker
            - Install MongoDB
            - Set DATA folder in the `docker-react-express` as database for it
            - go to `express-server` do npm start(as I have sent the node modules also)
            - go to `react-client` do npm start
            - go to `localhost:3000`




