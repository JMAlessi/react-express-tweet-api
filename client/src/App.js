import logo from './logo.svg';
import './css/App.css';
import TweetFeed from './components/TweetFeed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          J. A.
        </h1>
      </header>
      <TweetFeed />
    </div>
  );
}

export default App;