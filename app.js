const express = require("express");
const app = express();
const port = 8080

app.listen(port, function(req, res) {
	console.log("server is running on port: " + port);
});

app.get("/", (req, res) => { 
	res.sendFile(__dirname + "/site_404.html");
});