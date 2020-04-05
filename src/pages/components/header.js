import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View
        style={{
          height: 50,
          backgroundColor: '#FFF',
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
        }}>
        {/* <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          BATEX energy
        </Text> */}
        <Image
          source={require('../../assets/img/logoLectro.png')}
          style={{ height: '40%', width: '33%', resizeMode:'center' }}
        />
      </View>
    );
  }
}
export default Header;
