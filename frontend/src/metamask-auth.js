import React, { useEffect, useState } from "react";
import styles from "./metamask-auth.module.css";
import { Form  } from "react-bootstrap";
import ClientRate from "./client-rate"
function isMobileDevice() {
  return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

async function connect(onConnected) {
  if (!window.ethereum) {
    alert("Get MetaMask!");
    return;
  }

  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  onConnected(accounts[0]);
}

async function checkIfWalletIsConnected(onConnected) {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({
      method: "eth_accounts",
    });

    if (accounts.length > 0) {
      const account = accounts[0];
      onConnected(account);
      return;
    }

    if (isMobileDevice()) {
      await connect(onConnected);
    }
  }
}


export default function MetaMaskAuth(){
  //{ onAddressChanged }
  const [userAddress, setUserAddress] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected(setUserAddress);
  }, []);

  /* useEffect(() => {
    onAddressChanged(userAddress);
  }, [userAddress]);
 */
  return userAddress ? (
    <div>
      <Address userAddress={userAddress} />
      <ClientRate/>
    </div>
  ) : (
     <Connect setUserAddress={setUserAddress}/>
  );
}


function Connect({ setUserAddress }) {
  if (isMobileDevice()) {
    const dappUrl = "metamask-auth.ilamanov.repl.co"; // TODO enter your dapp URL. For example: https://uniswap.exchange. (don't enter the "https://")
    const metamaskAppDeepLink = "http://localhost:3000/login";
    return (
      <div>
        <a href={metamaskAppDeepLink}> 
          <button className={styles.button}>
            Connect to MetaMask
          </button>
        </a>
      </div>
    );
  }

  
  return (
    <div>
      <p className={styles.p}>
        Please login to share your feedbacks with us and get REWARDS :) .
        <br />
        Connect to your MetaMask account !.
      </p>
      <Form>
        <div className={styles.input} >
          <Form.Control size="lg" type="text" placeholder="Booking number" />
        </div>       
        <button className={styles.button} onClick={() => connect(setUserAddress)}>
          Connect to MetaMask
        </button>
      </Form>
    </div>
  );
}


function Address({ userAddress }) {
  return (
    <div  className={styles.p}>
      Connected with <span className={styles.address}> {userAddress}</span>
    </div>
    
  );
}
