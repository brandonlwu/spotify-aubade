import React from 'react';
import './App.css';
import {spotifyWhite} from './index'

function Login() {
    return (
        <a className="btn-spotify" href="/auth/login" >
            <img src = {spotifyWhite} className = 'spotifyIcon'/>
            Login with Spotify 
        </a>
    );
}

export default Login;