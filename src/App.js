import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { InstallMetamsk } from "./components/InstallMetamask";
import { useConnectWallet } from "./hooks/useConnectWallet";
import { HomeDisconnectWallet } from "./components/HomeDisconnectWallet";
import { HomePage } from "./components/HomePage";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar/index";

function App() {
  const { ethereum } = window;
  const { accountAddress, handleConnectWallet } = useConnectWallet();

  const accounts = [];
  return (
    <>
      <div className="bg-slate-900 h-screen">
        {!ethereum && <InstallMetamsk />}
        {!accountAddress && (
          <HomeDisconnectWallet handleConnectWallet={handleConnectWallet} />
        )}
        {accountAddress && (
          <>
            <Navbar />
            <Sidebar />
            <HomePage
              accountAddress={accountAddress}
              ethereum={ethereum}
              accounts={accounts}
            />
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
