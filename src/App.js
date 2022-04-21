import React, { Component } from 'react';
import CardList from './CardList';
import Scrol from './ScrollList';
import {movies} from './movies'
import Searchbox from './searchInput';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movies,
      searchF: '',
    };
  }
  OninputChange = event => {
    this.setState({ searchF: event.target.value });
  };

  render() {
    const filterMovie = this.state.movies.filter(movie => {
      return movie.name.toLowerCase().includes(this.state.searchF.toLowerCase());
    });
    if (!this.state.movies.length) {
      return <h1>LOADING....</h1>;
    }
    return (
      <div className="tc">
        <h1 className="f1">Movies</h1>
        <Searchbox inputChange={this.OninputChange} />
        <Scrol>
          <CardList movies={filterMovie} />
        </Scrol>
      </div>
    );
  }
}

export default App;
