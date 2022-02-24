
import './App.css';
import MetaMaskAuth from './metamask-auth'
import Hotels from './hotels';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Web3 from 'web3';

function App() {
  return (
   <Router basename={process.env.PUBLIC_URL}>
     <div className="App">
        <header className="App-header">
          <img src="../hotel.png" className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to Ratting Hotel App by Tunisia travel agencies !
          </h1>
        </header>
		  </div>
        <Routes>
            <Route exact path='/login' element={<MetaMaskAuth/>}/>
            <Route exact path='/' element={<Hotels/>}/>
        </Routes>
    </Router> 
  );
} 

export default App;
