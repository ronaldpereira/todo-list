# Shell script to run npm install, starting the mongodb service and opening the server on localhost:8080
installandrun:
	@npm install && sudo service mongod start && echo 'mongodb service is up and running.' && npm start
