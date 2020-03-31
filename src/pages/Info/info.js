import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class Info extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/img/undrawMaintenance.png')}
          resizeMode="cover"
          style={{height: 250, width: 270}}
        />
        <Text>Working on it!</Text>
      </View>
    );
  }
}
export default Info;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
