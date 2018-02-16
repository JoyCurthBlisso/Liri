require("dotenv").config();

  var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);

// argv has to be one of these things - switch
//   * `my-tweets`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`


// default return you need to put in one of these:::blah above

// This will show the following information about the song in your terminal/bash window
//console.lgo this info:
// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from
// If no song is provided then your program will default to "The Sign" by Ace of Base.


// call omdb and disply:

 // Title of the movie.
 //   * Year the movie came out.
 //   * IMDB Rating of the movie.
 //   * Rotten Tomatoes Rating of the movie.
 //   * Country where the movie was produced.
 //   * Language of the movie.
 //   * Plot of the movie.
 //   * Actors in the movie.

//  If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'


// If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/

// It's on Netflix!

var fs = require("fs");

//look at class activities

// It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
// Feel free to change the text in that document to test out the feature for other commands.



