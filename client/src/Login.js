import React from 'react'

import {Container} from 'react-bootstrap'
const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=251620f36bcf481d82c13fbe3fb48bc9&response_type=code&redirect_uri=https://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
export default function Login() {
    return (
        
        <Container className="d-flex justify-content-center align-items-center"
        style = {{ minHeight : "100vh"}}
        >
           <a className='btn btn-success btn-lg' href = {AUTH_URL}>
               Login with Spotify
           </a>
       </Container>
    )
}
//after getting to authorization page a code will now visible in search bar and use that code for generating token 
