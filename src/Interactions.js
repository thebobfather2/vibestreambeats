import {React, useState} from 'react'
import styles from './Wallet.module.css';
import vsn from './img/vsn.jpg';

const Interactions = (props) => {

	const [transferHash, setTransferHash] = useState();


	const transferHandler = async (e) => {
		e.preventDefault();
		let transferAmount = e.target.sendAmount.value;
		let recieverAddress = e.target.recieverAddress.value;

		let txt = await props.contract.transfer(recieverAddress, transferAmount);
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

						<button type='submit' className={styles.button6}>Send</button>
						<div>
							{transferHash}
						</div>
			</form>
			</div>
		)
	
}

export default Interactions;