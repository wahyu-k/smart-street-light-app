import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {connect, Provider} from 'react-redux';
import Login from './src/pages/Login/login';
import MainApp from './src/pages/MainApp/mainApp';
import store from './src/redux/store';
import {Text} from 'react-native';
import Splash from './src/pages/Splash/splash';

const Stack = createStackNavigator();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Splash />
      </Provider>
    );
  }
}

export default App;
