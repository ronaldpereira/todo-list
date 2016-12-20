# Shell script to run npm install, start the mongodb service and open the server on localhost:8080

all:
	@sudo npm install && sudo service mongod start && echo 'MongoDB service is up and running.' && node server.js
