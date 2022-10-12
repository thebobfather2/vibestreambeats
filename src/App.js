import logo from './img/vsn.jpg';
import './App.css';
import WalletCard from './Pages/WalletCard';
import WalletCardEthers from'./Pages/WalletCardEthers';
import Wallet from './Wallet';

function App() {

  return (
    <div className="App" style={{marginBottom: "40px"}}>
            <img style={{maxWidth: "300px", marginTop: "20px", marginBottom: "50px"}} src={logo} alt='vsn logo'/>
    <WalletCardEthers/>
    <div className='Body'>
      <h2>
        Audio Player will go here
      </h2>
    </div>
    <Wallet />
    </div>
  );
}

export default App;