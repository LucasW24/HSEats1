import React, {useState, useEffect, useContext} from 'react'
import {Button, Timeline}from 'antd'
import AuthContext from '../auth/AuthContext.js'

import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import Input from '../components/Input';
import InputHot from '../components/InputHot';

const Home = () => {
    
    const {auth, setAuth} = useContext(AuthContext)

    return (
        <div className="App">
            <Navbar></Navbar>
            
            <div id="body" style={{height:"120vh"}}>
                <div id = "foodType" style ={{fontSize:"4vh"}}>
                    Cold
                </div>
                <Input></Input>
                <div id = "foodType" style ={{fontSize:"4vh"}}>
                    Hot
                </div>
                <InputHot></InputHot>
            </div>
            
        </div>
    )
}

export default Home
