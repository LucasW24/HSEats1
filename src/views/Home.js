import React, {useState, useEffect, useContext} from 'react'

import AuthContext from '../auth/AuthContext.js'

import Navbar from '../components/Navbar';
import Loading from '../components/Loading';


const Home = () => {
    
    const {auth, setAuth} = useContext(AuthContext)

    return (
        <div className="App">
            <Navbar></Navbar>
            <div id="body" style={{height:"120vh"}}>
                Arnav is extremely awesome :) monke
            </div>
        </div>
    )
}

export default Home
