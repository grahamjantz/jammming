import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './SearchResults.css';

class SearchResults extends React.Component {
    render() {
        return(
            <div className="SearchResults">
                <h2>Results</h2>
                {/* <!-- Add a TrackList component --> */}
                <Tracklist tracks={this.props.searchResults}/>
            </div>
        );
    }
}

export default SearchResults;