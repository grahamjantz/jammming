import logo from './logo.svg';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';


function App() {
  return (
    <div>
      <h1>Ja<span classNameName="highlight">mmm</span>ing</h1>
      <div className="App">
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar />
        <div className="App-playlist">
          {/* <!-- Add a SearchResults component --> */}
          {/* <!-- Add a Playlist component --> */}
          <SearchResults />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
