require("dotenv").config();

var fs = require("fs");
var keys = require("./keys.js");
var request = require("request");

var twitter = require("twitter");
var client = new twitter(keys.twitter);

var spotify = require("node-spotify-api");
var spotifyClient = new spotify(keys.spotify);

	// Inquirer
	// var inquirer = require("inquirer");

	console.log("\nEnter one of the following commands to begin:\n");
	console.log("\nmy-tweets\n");
	console.log("\nspotify-this-song song\n");
	console.log("\nmovie-this movie\n");
	console.log("\ndo-what-it-says\n");

	var userChoice = process.argv[2];
	var userInput = process.argv[3];

	switch (userChoice) {

	    case 'my-tweets':
	        myTweets();
	        break;

	    case 'spotify-this-song':
	        spotifyThisSong();
	        break;

	    case 'movie-this':
	        movieThis();
	        break;

	    case 'do-what-it-says':
	        doWhatItSays();
	        break;
	    default: 
	    	console.log("\nEnter a Valid Commands from the Above Options.\n");
	    	break;

	}

	function myTweets() {

	// node liri.js my-tweets
	
	    var twitterParams = {
	        screen_name: 'joyoussydney',
	        count: 20
	    };

	    client.get('statuses/user_timeline', twitterParams, function(error, tweets, response) {
	        if (error) {
	            console.log('Error');
	        } else {
	            for (i = 0; i < tweets.length; i++) {
	                var myTweets = (tweets[i].created_at + '\n' + tweets[i].text + '\n');
	                console.log(myTweets);
	            }
	        };
	    });
	};

	function spotifyThisSong (){

		var songName;
			if (userInput == undefined) {
		        songName = "The Sign";
		     
		    } else {
		        songName = userInput;	
		    } 

		spotifyClient.search({ type: 'track', query: songName }, function(error, data) {

        if (error) {
            console.log(error);
            return;
        }
        
        console.log("Artist(s): " + data.tracks.items[0].album.artists[0].name);
        console.log("Song name: " + data.tracks.items[0].name);
        console.log("A preview link of the song from Spotify: " + data.tracks.items[0].album.artists[0].external_urls.spotify);
        console.log("Album Name: " + data.tracks.items[0].album.name)
    });
	}

	function movieThis (){

		var movie = userInput;

	    if (userInput === undefined) {
	        movie = "Mr. Nobody";
	       
	    } else {
	        movie = userInput;
	    };

	    var requestURL = "https://www.omdbapi.com/?t=" + movie + "&tomatoes=true&y=&plot=short&r=json&apikey=trilogy";

    	request(requestURL, function(error, response, data) {
        if (error) {
            console.log(error);
        } else {
            console.log("Movie Title: " + JSON.parse(data)["Title"]);
            console.log("Year Movie Came Out: " + JSON.parse(data)["Year"]);
            console.log("IMDB Rating: " + JSON.parse(data)["imdbRating"]);
            console.log("Rotten Tomatoes URL: " + JSON.parse(data)["tomatoURL"]);
            console.log("Country Where Movie Was Produced: " + JSON.parse(data)["Country"]);
            console.log("Language: " + JSON.parse(data)["Language"]);
            console.log("Plot: " + JSON.parse(data)["Plot"]);
            console.log("Actors: " + JSON.parse(data)["Actors"]);
            
        }
    });

	}

	function doWhatItSays (){

		fs.readFile("random.txt", "utf8", function(error, data) {
	    console.log(data);
	  });
};





