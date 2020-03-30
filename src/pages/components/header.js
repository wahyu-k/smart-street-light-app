import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
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
};
export default Header;
