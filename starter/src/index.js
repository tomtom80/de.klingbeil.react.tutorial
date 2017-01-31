import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyADpNC9ZFxrFouwziK2mjH649obhV3kc8Y';

const App = () => {
  return <div>
    <SearchBar />
  </div>
};

ReactDOM.render(
  <App />
  , document.querySelector('.container'));
