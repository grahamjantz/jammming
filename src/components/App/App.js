// import logo from './logo.svg';
import './App.css';
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults';
import React from 'react';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [
        {name: 'Three Years Later', artist: 'Waterfront', album: 'Fever Dream', id: 1},
        {name: 'Backbreaker', artist: 'Waterfront', album: 'New Heights', id: 2},
        {name: 'Loose Cannon', artist: 'Waterfront', album: 'Loose Cannon', id: 3}
      ],
      playlistName: 'Waterfront',
      playlistTracks: [
        {name: 'playlistName1', artist: 'playlistArtist1', album: 'playlistAlbum1', id: 4},
        {name: 'playlistName2', artist: 'playlistArtist2', album: 'playlistAlbum2', id: 5},
        {name: 'playlistName3', artist: 'playlistArtist3', album: 'playlistAlbum3', id: 6}
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          {/* <!-- Add a SearchBar component --> */}
          <SearchBar />
          <div className="App-playlist">
            {/* <!-- Add a SearchResults component --> */}
            {/* <!-- Add a Playlist component --> */}
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
