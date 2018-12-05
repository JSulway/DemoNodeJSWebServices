module.exports = {
	    DBCONFIG: {
	    	user:'demouser',
	    	password:'Password1234567$',
	    	server:'192.168.56.1',
	    	database:'demoDB'
	    },
	    WSCONFIG: {
	        webServicePort:8081
	    },
	    URL: {
	    	getAllPlanets:'/planets',
	    	getAllPlanetNames:'/planetNames',
	    	getResponseFileJson:'/responseFileJson'
	    },
	    SQL: {
	    	getAllPlanets:'select * from "demoDB"."demo".PLANET',
	    	getAllPlanetNames:'select PLANET_NAME from PLANET'
	    },
	    JSON: {
	    	getJSONFile:'./jsonResponseFile.json'
	    }
}