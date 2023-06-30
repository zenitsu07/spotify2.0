//* to install package.json - npm init -y
const express = require('express');
// const cors = require('cors')
//?creating a class
const SpotifyWebApi = require('spotify-web-api-node');//to use the api
//.require() 
const app = express();
//The data sent to the server with POST is stored in the request body of the HTTP request:

// app.post('./login',(req,res) => {

//     const code = req.body.code;

//     const spotifyApi = spotifyWebApi({

//         redirectUri  : 'http://localhost:3000',//1st needed
//         clientId :'251620f36bcf481d82c13fbe3fb48bc9', //2nd needed - client id
//         clientSecret : 'c9831fc9d3044bde8ab5327814d0b998',
    
//     })
//?creating a class named spotifyApi with three members for env file
app.post("./login", (req,res) => {
    //?It stores the code sent as response from api

    const code  = req.body.code
    const spotifyApi = new SpotifyWebApi({

        clientId:'251620f36bcf481d82c13fbe3fb48bc9',
        redirectUri: 'http://localhost:3000',
        clientSecret:'c9831fc9d3044bde8ab5327814d0b998',
    })
    spotifyApi.authorizationCodeGrant(code).then(data =>{
        //api returns data in from of json

        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in
        })
    })
    .catch(() =>{
        res.sendStatus(400)
    })
})

    //requesting data for api 
    // authorize code granted
    
// Now define which port server will run
app.listen(3001);
//xI had the same issue I ran killall node then npm start after that my local server at port 5000 worked again. Hope that helps you.