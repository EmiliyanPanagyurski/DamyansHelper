import React, { Component } from 'react';
import { View } from 'react-native';
import Thumbnail from '../components/thumbnail';
import getMovies from '../utils/getMovies';
import constants from '../utils/constants';

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.goToDetails = this.goToDetails.bind(this);
  }

  componentWillMount = async () => {
    const response = await getMovies(constants.URL);
    const movies = await response.json()
    this.setState({movies})
  }

  goToDetails(index) {
    this.props.navigation.navigate('Details', {movie: this.state.movies[index]});
  }

  render() {
    const movies = this.state.movies;
    return (
      <View>
         {movies.map((movie, i) => <Thumbnail goToDetails={this.goToDetails} {...movie} index={i} key={i} />)}
      </View>
    )
  }
}