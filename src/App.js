import logo from './img/vsn.jpg';
import React, { useRef, useEffect, useState } from "react";
import './App.css';
import WalletCard from './WalletCard';
import WalletCardEthers from'./WalletCardEthers';
import Wallet from './Wallet';
import Navbar from './components/Navbar';
import audioplayer from './img/audioplayer.jpg'
import Player from './Player/Player';
import { songsdata } from './Player/audios';

function App() {
  const [songs, setSongs] = useState(songsdata);
  const [isplaying, setisplaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songsdata[1]);

  const audioElem = useRef();

  useEffect(() => {
    if (isplaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isplaying])

  const onPlaying = () => {
    const duration = audioElem.current.duration;
    const ct = audioElem.current.currentTime;

    setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })

  }
  return (
    <div className="App" style={{marginBottom: "0px"}}>
          <Navbar/>
            <img style={{
              maxWidth: "300px", 
              marginTop: "50px", 
              marginBottom: "50px", 
              borderRadius: "20px",
              boxShadow: "0.2em 0.2em 0 0.2em rgba(0,0,0,0.17)",
              }} src={logo} alt='vsn logo'/>
    <WalletCardEthers/>
    <div className="Player">
      <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
      <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
    </div>
    <Wallet />
    </div>
  );
}

export default App;