import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { InstallMetamsk } from "./components/InstallMetamask";
import { useConnectWallet } from "./hooks/useConnectWallet";
import { HomeDisconnectWallet } from "./components/HomeDisconnectWallet";
import { HomePage } from "./components/HomePage";
import { Header } from "./components/Header";

function App() {
  const { ethereum } = window;
  const { accountAddress, handleConnectWallet } = useConnectWallet();
  return (
    <>
      <div className="bg-slate-900 h-screen">
        {!ethereum && <InstallMetamsk />}
        {!accountAddress && (
          <HomeDisconnectWallet handleConnectWallet={handleConnectWallet} />
        )}
        {accountAddress && (
          <>
            <Header />
            <HomePage accountAddress={accountAddress} ethereum={ethereum} />
          </>
        )}

        {/* 
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div> */}
      </div>
    </>
  );
}

export default App;
