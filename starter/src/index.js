import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyADpNC9ZFxrFouwziK2mjH649obhV3kc8Y';



class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [], selectedVideo: null };

    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos })
    });
  }

  render() {
    const videoSearch = _.debounce( term => this.videoSearch(term), 300);
    return <div>
      <SearchBar onSearchTermChanged={videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        videos={this.state.videos}
        onVideoSelect={selectedVideo => this.setState({ selectedVideo })} />
    </div>
  };
}

ReactDOM.render(
  <App />
  , document.querySelector('.container'));
