import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner';

function App() {
  return (
    <div className="App">
      <Banner />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        https://pt.aliexpress.com/item/1005001506830720.html?spm=a2g0o.productlist.main.47.11251504XPpMm1&algo_pvid=6fe92711-4ed9-4782-9e66-fdf38f8a7aab&algo_exp_id=6fe92711-4ed9-4782-9e66-fdf38f8a7aab-23&pdp_ext_f=%7B%22sku_id%22%3A%2212000028115438315%22%7D&pdp_npi=2%40dis%21BRL%2191.49%2181.4%21%21%21%21%21%40211bf3f716727701607876459d070f%2112000028115438315%21sea&curPageLogUid=qyo5oMFl31wA <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
