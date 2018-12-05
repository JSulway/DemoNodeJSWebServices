var express = require('express'); // Framework
var app = express();
var sql = require('mssql'); // MS Sql Server client
var fs = require("fs");	// file system module 

var config = require('./config');

var sqlConfig = {
    user: config.DBCONFIG.user,
    password: config.DBCONFIG.password,
    server: config.DBCONFIG.server,
    database: config.DBCONFIG.database
}

app.get(config.URL.getAllPlanets, function (req, res) {
	
	new sql.ConnectionPool(sqlConfig).connect().then(pool => {
	return pool.request().query(config.SQL.getAllPlanets)
		.then(result => {
			let rows = result.recordset
			res.setHeader('Access-Control-Allow-Origin', '*')
			res.status(200).json(rows);
			sql.close();
		}).catch(err => {
			res.status(500).send({message: "${err}"})
			sql.close();
		});	
	});
})

app.get(config.URL.getAllPlanetNames, function (req, res) {
    new sql.ConnectionPool(sqlConfig).connect().then(pool => {
	return pool.request().query(config.SQL.getAllPlanetNames)
		.then(result => {
			let rows = result.recordset
			res.setHeader('Access-Control-Allow-Origin', '*')
			res.status(200).json(rows);
			sql.close();
		}).catch(err => {
			res.status(500).send({message: "${err}"})
			sql.close();
		});	
	});
})

app.get(config.URL.getResponseFileJson, function (req, res) {
    	res.setHeader('Access-Control-Allow-Origin', '*')
		res.status(200).send(fs.readFileSync(config.JSON.getJSONFile));
})

// Start server and listen on http://localhost:8081/
var server = app.listen(config.WSCONFIG.webServicePort, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("app listening at http://%s:%s", host, port)
});
