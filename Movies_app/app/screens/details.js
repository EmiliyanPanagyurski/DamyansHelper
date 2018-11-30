import React, { Component } from 'react';
import { View } from 'react-native';
import MovieDetails from '../components/moviewDetails';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {...this.props.navigation.state.params.movie}
    }
  }

  render() {
    return (
      <View>
        <MovieDetails {...this.state.movie}/>
      </View>
    )
  }
}