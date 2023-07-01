import logo from './bitcoin-btc-logo.png';
import './App.css';
import BitcoinPrice from './components/bitcoinPrice';
/**
 * @returns The current price of Bitcoin.
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <BitcoinPrice> </BitcoinPrice>
        </p>
      </header>
    </div>
  );
}

export default App;
