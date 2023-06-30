Adding Development Environment Variables In .env
Note: this feature is available with react-scripts@0.5.0 and higher.

To define permanent environment variables, create a file called .env in the root of your project:

REACT_APP_NOT_SECRET_CODE=abcdef
Note: You must create custom environment variables beginning with REACT_APP_. Any other variables except NODE_ENV will be ignored to avoid accidentally exposing a private key on the machine that could have the same name. Changing any environment variables will require you to restart the development server if it is running.

Note: You need to restart the development server after changing .env files.

.env files should be checked into source control (with the exclusion of .env*.local)

TALK ABOUT API

Spotify web Node api->

The library includes helper functions to do the following:

Fetch music metadata
Albums, artists, and tracks
Audio features and analysis for tracks
Albums for a specific artist
Top tracks for a specific artist
Artists similar to a specific artist

ACTION
First, instantiate the wrapper.

var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret: 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri: 'http://www.example.com/callback'
});
If you've got an access token and want to use it for all calls, simply use the API object's set method. Handling credentials is described in detail in the Authorization section.

spotifyApi.setAccessToken('<your_access_token>');


Lastly, use the wrapper's helper methods to make the request to Spotify's Web API. The wrapper uses promises, so you need to provide a success callback as well as an error callback.

// Get Elvis' albums
spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
  function(data) {
    console.log('Artist albums', data.body);
  },
  function(err) {
    console.error(err);
  }
);

Now for using authorizartion in form of access tokens to features of spotify
render in server side of app i.e. inside server.js file
INstall packagae.json using npm i -y and install express and Spotify Web Node API as well
using command "npm i express spotify-web-api-node"

Now install  nodemon as Dev Dependency (Dev dependency is one which consists of all packages which are to be used in the development phase of the app and nor in productuon phase   )
using command "npm i nodemon--save-dev"

PAUSE
//GENREAL INFO ENDS

HTTP request methods -> https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
Some of them -> GET- The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
POST - The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server
PUT - The PUT method replaces all current representations of the target resource with the request payload.
Connect - The CONNECT method establishes a tunnel to the server identified by the target resource0
.
//GENERAL INFO ENDS

CONTINUE
So now post method is used to post data into login page of app using req and res usign access toekns

code is used here to grant authprisation to user to access features of the spotifywebnodeapi

code -> The code thats returned as query paramter to the redirect URI

KNOWLEDGE-> Authorization Code Grant

   The authorization code grant type is used to obtain both access
   tokens and refresh tokens and is optimized for confidential clients.
   Since this is a redirection-based flow, the client must be capable of
   interacting with the resource owner's user-agent (typically a web
   browser) and capable of receiving incoming requests (via redirection)
   from the authorization server.

   req----->
            The req object represents the HTTP request and has properties for the request query string, parameters, body, and HTTP headers. 
   res------>
            The res object represents the HTTP response that an Express app sends when it gets an HTTP request.01

NEXT SESSION--->

useAuth Hook

1-Now get the code from URL In App.js using URLsearchParams().get
2- safter getting render Dashboard.js componenet of App

function has three useState usage for accestoken refreash and expiresIn token