import React from 'react';
import './App.css';
import {spotifyWhite} from './index'

function Playlist() {

    async function search() {
        console.log('search for' +searchInput)
    }

    var artistParameters = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '
        }
    }

    return (
        <a className="btn-spotify" href="/me/playlists" >
            <img src = {spotifyWhite} className = 'spotifyIcon'/>
            Load my playlists


        </a>
    );
}

export default Playlist;