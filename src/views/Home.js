import React, {useState, useEffect, useContext} from 'react'
import {Button, Timeline}from 'antd'
import AuthContext from '../auth/AuthContext.js'

import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import Input from '../components/Input';

const Home = () => {
    
    const {auth, setAuth} = useContext(AuthContext)

    return (
        <div className="App">
            <Navbar></Navbar>
            
            <div id="body" style={{height:"120vh"}}>
                <Input></Input>
            </div>
        </div>
    )
}

export default Home
