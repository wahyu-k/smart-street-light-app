import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import MainApp from './src/pages/MainApp/mainApp';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MainApp />
      </View>
    );
  }
}
export default App;
