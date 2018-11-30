import React, { Component } from 'react';
import { Button, View, WebView } from 'react-native';

export default class MyWeb extends Component {
  render() {
    return (
      <View>
        <WebView
          source={{uri: 'https://www.website.com/terms-and-conditions/'}}
          style={{marginTop: 20}}
        />
        <Button title='I Agree' onPress={() => this.props.navigation.navigate('MovieList')}/>
      </View>
    );
  }
}