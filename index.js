var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
var Client = require('node-rest-client').Client;
var client = new Client();
//var MongoClient = require('mongodb').MongoClient;
//var assert = require('assert');
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(express.static(__dirname + '/public'));
//app.use(bodyParser.json());

var port = process.env.PORT || 5000;

//var router = express.Router(); 
//var cloverWebhookCtrl = require('./controller/cloverwebhook.js');
//var cloverCtrl = require('./controller/clover.js');
//var commonCtrl = require('./controller/common.js');
//var url = 'mongodb://localhost:27017/clover';
//var ws = require('uws').Server;

//var Deepstream = require( 'deepstream.io' ),
//    MongoDBStorageConnector = require( 'deepstream.io-storage-mongodb' ),
//    server = new Deepstream();
 
//server.set( 'storage', new MongoDBStorageConnector( {
//  connectionString: url,
//  splitChar: '/'
//}));
 
//server.start();

//app.get('/', function(req, res) {
//	res.render("index");
//});

app.get('/home/product/get/all', function(request, response){ 
var args = {
	headers: {
		"Content-Type": "application/json",
		"User-Agent" :"Mozilla/5.0 (Windows NT 10.0; WOW64; rv:53.0) Gecko/20100101 Firefox/53.0"
    		} 
    	};				
	client.get("https://www.airbnb.co.in/api/v2/explore_tabs?version=1.1.2&_format=for_explore_search_web&items_per_grid=18&experiences_per_grid=20&guidebooks_per_grid=20&fetch_filters=true&supports_for_you_v3=true&screen_size=large&timezone_offset=-420&auto_ib=true&selected_tab_id=all_tab&allow_override%5B%5D=&in_see_all=true&s_tag=1Nhe-Nf2&location=&_intents=p1&key=d306zoyjsyarp7ifhu67rjxn52tv0t20&currency=USD&locale=en-IN", args, function (data, res) {
		response.send(data);
   	}).on('error',function(err){
        	console.log('something went wrong on the request', err);
    	});
});

app.listen(port);

console.log('Server connected at ' , port);
