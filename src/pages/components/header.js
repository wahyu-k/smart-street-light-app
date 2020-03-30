import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View
        style={{
          height: 50,
          backgroundColor: '#b71c1c',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          BATEX energy
        </Text>
      </View>
    );
  }
}
export default Header;
