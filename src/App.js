import './App.css';
import Navbar from './components/navbar'

import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from "@ethersproject/providers";

function getLibrary(provider) {
  return new Web3Provider(provider);
}


function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Navbar />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
