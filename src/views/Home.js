import React, {useState, useEffect, useContext} from 'react'
import {Button, Timeline}from 'antd'
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
                <Button> Arnav </Button>
                {/* <Timeline mode = "right">
                    <Timeline.Item>step1 2015-09-01</Timeline.Item>
                    <Timeline.Item>step2 2015-09-01</Timeline.Item>
                    <Timeline.Item>step3 2015-09-01</Timeline.Item>
                    <Timeline.Item>step4 2015-09-01</Timeline.Item>
                </Timeline> */}
            </div>
        </div>
    )
}

export default Home
