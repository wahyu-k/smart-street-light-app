import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as action from '../../redux/action';

class Info extends Component {
  storeData = async () => {
    try {
      await AsyncStorage.setItem('USER_ID', '0');
      this.props.setLoginData({ loginData: { userId: '0' } });
    } catch (e) {
      alert(e);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/img/undraw_user.png')}
          resizeMode="cover"
          style={{ height: 250, width: 270 }}
        />
        {/* <Text>Info Page</Text> */}
        <TouchableOpacity
          style={{
            marginTop: 10,
            backgroundColor: '#81AD2F',
            padding: 10,
            borderRadius: 15,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            this.storeData();
          }}>
          <Icon name="lock" color="white" />
          <Text style={{ color: 'white', marginLeft: 8 }}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // loadData: ({ userId }) => dispatch(action.loadData({ userId })),
    setLoginData: ({ loginData }) =>
      dispatch(action.setLoginData({ loginData })),
  };
}

export default connect(null, mapDispatchToProps)(Info);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
