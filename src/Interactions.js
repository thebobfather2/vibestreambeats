import {React, useState} from 'react'
import styles from './Wallet.module.css';
import vsn from './img/vsn.jpg';
import { ethers } from 'ethers';

//const provider =
//    network === 'private'
//      ? new ethers.providers.JsonRpcProvider('http://localhost:8545')
//      : new ethers.getDefaultProvider(network)

var provider = ethers.providers;

const Interactions = (props) => {

	const [transferHash, setTransferHash] = useState();


	const transferHandler = async (e) => {
        e.preventDefault();
        let transferAmount = ethers.utils.parseEther(e.target.sendAmount.value); // The input form takes a normal value, but transactions need to be sent with the value parsed to wei (ie 1000000000000000000 instead of 1)
        let recieverAddress = e.target.recieverAddress.value;

                const txData = {
                  to: recieverAddress,
                  value: transferAmount,
                }

              // Note - the signer/provider will need to be passed into this module somehow
              const txt = await provider.sendTransaction(txData)
          console.log(txt);
          setTransferHash("Transfer confirmation hash: " + txt.hash);
	}

	return (
			<div className={styles.interactionsCard}>
				<form onSubmit={transferHandler}>
				<img style={{maxWidth: "100px", marginTop: "30px"}} src={vsn} alt='vsn logo'/>
						<h3> Artist: </h3>
						<input type='text' id='recieverAddress' className={styles.addressInput}/>

						<h4> How much would you like to tip? </h4>
						<input type='number' id='sendAmount' min='0' step='1'/>

						<button type='submit' className={styles.button6}>Tip</button>
						<div>
							{transferHash}
						</div>
			</form>
			</div>
		)
	
}

export default Interactions;