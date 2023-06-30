import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./Login"
import Dashboard from "./Dashboard"
// We have to catch the code that appears in search box when you clicked on Login with Spotify and then on Agree on next page
// To do that
//* URLSearchParams(window.location.search) gives portion of text after ? mark from searcharea

const code = new URLSearchParams(window.location.search).get('code')

//now create Dashboard.js

function App(){
  // return code ? <Dashboard code = {code} /> : <Login />
  return <Login />
}

export default App;