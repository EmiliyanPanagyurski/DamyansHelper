import React, { Component } from 'react';
import { View, Button, TextInput, Text } from 'react-native';
import db from '../utils/db';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      credentials: {},
      error: false,
      errorMsg: 'Email or password wrong!'
    };
    this.checkCredentials = this.checkCredentials.bind(this);
  }

  checkCredentials(email, password) {
    const credentials = this.state.credentials;
    if(credentials.email === email && credentials.password === password) {
      this.props.navigation.navigate('Eula');
    } else {
      const error = true;
      this.setState({error});
    }
  }

  componentDidMount() {
    const credentials = db();
    this.setState({credentials});
  }

  render() {
    return(
      <View>
        {this.state.error && <Text>{this.state.errorMsg}</Text>}
        <TextInput onChangeText={(email) => this.setState({email})} />
        <TextInput onChangeText={(password) => this.setState({password})}/>
        <Button title='Login' onPress={() => this.checkCredentials(this.state.email, this.state.password)}/>
        <Button title='Forgot your password?' onPress={() => alert('DumbAss!')}/>
      </View>
    );
  }
}