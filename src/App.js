import logo from './img/vsn.jpg';
import React, { useEffect, useState } from "react";
import './App.css';
import WalletCard from './Pages/WalletCard';
import WalletCardEthers from'./Pages/WalletCardEthers';
import Wallet from './Wallet';
import Navbar from './components/Navbar';

function App() {

    const [setScreenWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const changeWidth = () => {
        setScreenWidth(window.innerWidth);
      };
      window.addEventListener("resize", changeWidth);
      return () => {
        window.removeEventListener("resize", changeWidth);
      };
    }, []);

  return (
    <div className="App" style={{marginBottom: "0px"}}>
          <Navbar/>
            <img style={{maxWidth: "300px", marginTop: "50px", marginBottom: "50px", borderRadius: "20px"}} src={logo} alt='vsn logo'/>
    <WalletCardEthers/>
    <div className='Body'>
      <h2>
        Audio Player will go here!
      </h2>
    </div>
    <Wallet />
    </div>
  );
}

export default App;