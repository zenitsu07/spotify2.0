//* useAuth hook
import React from 'react'

import {useState, useEffect} from 'react'

import axios from 'axios'

export default function useAuth( code  ){

    //using useState() to set the state so that it can be updated wehre needed
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    // to get that info use useEffect()
    useEffect(() => {
        //Now we will be posting  all data code to this Login route 
        // then is used to hook up a handler that will be called when the promise is resolved 
        axios.post('http://localhost:3001/login',{
            code,
        }).
        then ( res => {
            console.log(res);
        })
         
    }, [code])
    //* input is code because this will run useEffect function everytime code changes and to call the required api
}
//* component useAuth.js is to utilise the tokens and expire id in our app authorisation for each user in client side making call requests to api
