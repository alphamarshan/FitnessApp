// dependencies
var express = require("express");
var router = express.Router();
var axios = require("axios");


// routes
var search = require("../public/js/search.js");
var app = express();


module.exports = function (app) {

    app.get("/api/:zip", function (req, res) {
        var userZip = req.params.zip;
        var apiCall = `http://api.amp.active.com/v2/search/?zip=${userZip}&current_page=1&per_page=10&sort=distance&radius=50&start_date=2017-09-01..&topic=running&exclude_children=true&api_key=7n9xb6xskmy3dx67uwj3pj54`;

        axios.get(apiCall).then(function(response) {
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });


        // res.send(options);
    });
};