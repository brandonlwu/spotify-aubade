import React, { useState, useEffect } from 'react';
import WebPlayback from './WebPlayback'
import Login from './Login'
import './App.css';
import Playlist from './Playlist';

function App() {

  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();

  }, []);

  return (
    <div className = 'container'>
        { (token === '') ? <Login/> : <Playlist/>}
    </div>
  );
}


export default App;