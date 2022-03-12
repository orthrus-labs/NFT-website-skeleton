import React, { useCallback } from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../Home'
import About from '../About'

import { useWeb3React, Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";
import { injected } from "../components/connectors/Connectors"


function getLibrary(provider, connector) {
  return new Web3Provider(provider);
}

const Navbar = () => {
    const {active, account, library, connector, activate, deactivate } = useWeb3React()
    async function connect() {
        try {
          await activate(injected)
        } catch (ex) {
          console.log(ex)
        }
      }
    
      async function disconnect() {
        try {
          deactivate()
        } catch (ex) {
          console.log(ex)
        }
      }

    return (
        <div>
            <Router>
                <div class="navbar bg-base-100">
                    <div class="flex-1">
                        <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
                    </div>
                    <div class="flex-none">
                        <ul class="menu menu-horizontal p-0">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li tabindex="0">
                                <a>
                                    Parent
                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul class="p-2 bg-base-100">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><button onClick={connect}>Connect Wallet</button></li>
                            {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
                            <button onClick={disconnect} className="py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800">Disconnect</button>

                        </ul>
                    </div>

                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>

            </Router>
        </div >
    )
}

export default Navbar