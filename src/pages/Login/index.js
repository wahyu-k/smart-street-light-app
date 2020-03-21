import axios from 'axios';
import React, {Component} from 'react';
import {
  ActivityIndicator,
  Image,
  Keyboard,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icon} from 'react-native-elements';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends Component {
  state = {
    username: '',
    pass: '',
    animating: false,
    userId: '0',
  };

  constructor(props) {
    super(props);
  }

  storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {}
  };

  getStoredData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        this.setState({userId: value});
      }
    } catch (e) {}
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator
          style={{...StyleSheet.absoluteFillObject, position: 'absolute'}}
          size="large"
          color="#b71c1c"
          animating={this.state.animating}
        />
        <View style={{flex: 1}}>
          <StatusBar backgroundColor="#b71c1c" barStyle="light-content" />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/img/logoBatex.png')}
              style={{
                height: 75,
                resizeMode: 'contain',
                width: '100%',
              }}
            />
          </View>
          <View style={styles.container}>
            <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
              First, you must sign in...
            </Text>
            <TextInput
              placeholder="Username"
              style={styles.input}
              onChangeText={text => {
                this.setState({username: text});
              }}
            />
            <TextInput
              placeholder="Password"
              style={styles.input}
              secureTextEntry
              onChangeText={text => {
                this.setState({pass: text});
              }}
            />
            <TouchableOpacity
              style={{
                marginTop: 10,
                backgroundColor: '#b71c1c',
                padding: 10,
                borderRadius: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                Keyboard.dismiss();
                this.checkLogin(this.state.username, this.state.pass);
              }}>
              <Icon name="lock-open" color="white" />
              <Text style={{color: 'white', marginLeft: 8}}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                marginTop: 10,
                backgroundColor: '#b71c1c',
                padding: 10,
                borderRadius: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                Keyboard.dismiss();
                this.storeData('userId', '1');
              }}>
              <Icon name="lock-open" color="white" />
              <Text style={{color: 'white', marginLeft: 8}}>COBA</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginBottom: 20,
            }}>
            <Text style={{color: '#606060'}}>Version 1.0.11</Text>
            <Text style={{color: '#606060'}}>by Batex Energy 2020</Text>
          </View>
        </View>
      </View>
    );
  }
  checkLogin = (username, pass) => {
    this.setState({animating: true});
    var body = new FormData();
    body.append('username', username);
    body.append('pass', pass);
    axios
      .post('http://iot.arduinosolo.com/login.php', body)
      .then(response => {
        response.data.userId === undefined
          ? this.setState({userId: '0'})
          : this.setState({userId: response.data.userId});
        console.log('respose' + this.state.userId);
        this.setState({animating: false});
        if (this.state.userId !== '0') {
          this.storeData('userId', this.state.userId);
        } else {
          this.storeData('userId', '0');
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };
}

export default Login;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  input: {
    fontSize: 16,
  },
});
