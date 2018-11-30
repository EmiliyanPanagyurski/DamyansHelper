/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Login from './app/screens/login';
import Eula from './app/screens/eula';
import MovieList from './app/screens/movieList';
import Details from './app/screens/details';

const RootStack = createStackNavigator(
  {
    Login: Login,
    Eula: Eula,
    MovieList: MovieList,
    Details: Details
  },
  {
    initialRouteName: 'Login'
  });

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}