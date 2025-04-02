import './App.css';
import Axios from 'axios';
import { useState } from 'react';

const App = () => {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");

    const searchLyrics = () => {
      if(artist === "" || song === ""){
        return;
      }
      Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => {
        console.log(res.data.lyrics);
        setLyrics(res.data.lyrics);
      })
    }
    return(
      <div className="App">
        <h1>Lyrics Finder 🎵</h1>
      <div id="inp">
        <input className="input" 
               type="text" 
               placeholder='Artist Name' 
               onChange={(e) => {
                setArtist(e.target.value)}
               }
        />
        <input className='input'
               type='text'
               placeholder='Song Name'
               onChange={(e) => {
                setSong(e.target.value)}
               }
        />
        </div>
        <div id="btn">
        <button className="btn" onClick ={() => searchLyrics()}>Search</button>
        <hr/>
        </div>
        <pre>{lyrics}</pre>

      </div>
    )
  }

  export default App;
  


