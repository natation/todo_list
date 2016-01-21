import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { API_KEY } from './keys';
import youTubeSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this._handleVideoSelect = this._handleVideoSelect.bind(this);
    this.videoSearch = this.videoSearch.bind(this);
  }
  componentDidMount() {
    this.videoSearch('surfboards');
  }
  videoSearch(term) {
    youTubeSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }
  _handleVideoSelect(selectedVideo) {
    this.setState({ selectedVideo });
  }
  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this._handleVideoSelect}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
