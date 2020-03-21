import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    // switch between Stack and Switch navigator
    return <MySwitchNavigator />;
    // return <MyStackNavigator />;
  }
}

class ScreenOne extends React.Component {
  // use in Stack navigator only
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Screen One</Text>
        <Button
          title="Go to two"
          onPress={() => this.props.navigation.navigate('routeTwo')}
        />
      </View>
    );
  }
}

class ScreenTwo extends React.Component {
  // use in Stack navigator only
  static navigationOptions = {
    title: 'Screen Two',
  };

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Screen Two</Text>
        <Button
          title="Go to three"
          onPress={() =>
            this.props.navigation.navigate('routeThree', {
              greeting: 'Hallo',
            })
          }
        />
      </View>
    );
  }
}

class ScreenThree extends React.Component {
  render() {
    let greeting = this.props.navigation.getParam('greeting', 'Hi');

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Screen Three</Text>
        <Button
          title={`${greeting}! Go to one`}
          onPress={() => this.props.navigation.navigate('routeOne')}
        />
      </View>
    );
  }
}

// Notice the head and back link on top of the screen
const MyStackNavigator = createStackNavigator(
  {
    routeOne: ScreenOne,
    routeTwo: ScreenTwo,
    routeThree: ScreenThree,
  },
  {
    initialRouteName: 'routeOne',
  },
);

const MySwitchNavigator = createSwitchNavigator(
  {
    routeOne: ScreenOne,
    routeTwo: ScreenTwo,
    routeThree: ScreenThree,
  },
  {
    initialRouteName: 'routeTwo',
  },
);

// import * as React from 'react';
// import {
//   Button,
//   Text,
//   TextInput,
//   View,
//   StyleSheet,
//   TouchableOpacity,
//   Keyboard,
//   ActivityIndicator,
// } from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
// import AsyncStorage from '@react-native-community/async-storage';
// import {Icon} from 'react-native-elements';
// import axios from 'axios';

// const AuthContext = React.createContext();

// function SplashScreen() {
//   return (
//     <View>
//       <Text>Loading...</Text>
//     </View>
//   );
// }

// function HomeScreen() {
//   const {signOut} = React.useContext(AuthContext);

//   return (
//     <View>
//       <Text>Signed in!</Text>
//       <Button title="Sign out" onPress={signOut} />
//     </View>
//   );
// }

// function SignInScreen() {
//   state = {
//     animating: false,
//   };

//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');

//   const {signIn} = React.useContext(AuthContext);

//   return (
//     <View style={{flex: 1}}>
//       <ActivityIndicator
//         style={{...StyleSheet.absoluteFillObject, position: 'absolute'}}
//         size="large"
//         color="#b71c1c"
//         animating={loadingAnim()}
//       />
//       <View style={{flex: 1}}>
//         {/* <StatusBar backgroundColor="#b71c1c" barStyle="light-content" /> */}
//         <View
//           style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}>
//           {/* <Image
//             source={require('../../assets/img/logoBatex.png')}
//             style={{
//               height: 75,
//               resizeMode: 'contain',
//               width: '100%',
//             }}
//           /> */}
//         </View>
//         <View style={styles.container}>
//           <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
//             First, you must sign in...
//           </Text>
//           <TextInput
//             placeholder="Username"
//             style={styles.input}
//             value={username}
//             onChangeText={setUsername}
//           />
//           <TextInput
//             placeholder="Password"
//             style={styles.input}
//             secureTextEntry
//             value={password}
//             onChangeText={setPassword}
//           />
//           <TouchableOpacity
//             style={{
//               marginTop: 10,
//               backgroundColor: '#b71c1c',
//               padding: 10,
//               borderRadius: 15,
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//             onPress={() => {
//               Keyboard.dismiss();
//               signIn({username, password});
//               // this.checkLogin(this.state.username, this.state.pass);
//             }}>
//             <Icon name="lock-open" color="white" />
//             <Text style={{color: 'white', marginLeft: 8}}>Login</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={{
//               marginTop: 10,
//               backgroundColor: '#b71c1c',
//               padding: 10,
//               borderRadius: 15,
//               flexDirection: 'row',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}
//             onPress={() => {
//               Keyboard.dismiss();
//               this.storeData('userId', '1');
//             }}>
//             <Icon name="lock-open" color="white" />
//             <Text style={{color: 'white', marginLeft: 8}}>COBA</Text>
//           </TouchableOpacity>
//         </View>
//         <View
//           style={{
//             flex: 1,
//             alignItems: 'center',
//             justifyContent: 'flex-end',
//             marginBottom: 20,
//           }}>
//           <Text style={{color: '#606060'}}>Version 1.0.11</Text>
//           <Text style={{color: '#606060'}}>by Batex Energy 2020</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const Stack = createStackNavigator();

// export default function App() {
//   let userId = '0';
//   let loading = false;

//   const [state, dispatch] = React.useReducer(
//     (prevState, action) => {
//       switch (action.type) {
//         case 'RESTORE_TOKEN':
//           return {
//             ...prevState,
//             userToken: action.token,
//             isLoading: false,
//           };
//         case 'SIGN_IN':
//           return {
//             ...prevState,
//             isSignout: false,
//             userToken: action.token,
//           };
//         case 'SIGN_OUT':
//           return {
//             ...prevState,
//             isSignout: true,
//             userToken: null,
//           };
//       }
//     },
//     {
//       isLoading: true,
//       isSignout: false,
//       userToken: null,
//     },
//   );

//   React.useEffect(() => {
//     const bootstrapAsync = async () => {
//       try {
//         let userToken = await AsyncStorage.getItem('userToken');
//         console.log('efek' + userToken);
//         dispatch({type: 'RESTORE_TOKEN', token: userToken});
//       } catch (e) {}
//     };

//     bootstrapAsync();
//   }, []);

//   const storeData = async (key, value) => {
//     try {
//       await AsyncStorage.setItem(key, value);
//     } catch (e) {}
//   };
//   const loadingAnim = value => {
//     return value;
//   };

//   const authContext = React.useMemo(
//     () => ({
//       signIn: async data => {
//         loadingAnim(true);
//         loading = true;
//         console.log('data' + data.username);
//         var body = new FormData();
//         body.append('username', data.username);
//         body.append('pass', data.password);
//         axios
//           .post('http://iot.arduinosolo.com/login.php', body)
//           .then(response => {
//             response.data.userId === undefined
//               ? (userId = '0')
//               : (userId = response.data.userId);
//             console.log('inet:' + response.data.userId);
//             console.log('var:' + userId);
//             // storeData('userToken', response.data.userId);
//             // dispatch({type: 'SIGN_IN', token: response.data.userId});
//           })
//           .catch(function(error) {
//             console.log(error);
//           });
//         console.log('userid:' + userId);
//         if (userId !== '0') {
//         }
//       },
//       signOut: () => dispatch({type: 'SIGN_OUT'}),
//       signUp: async data => {
//         // In a production app, we need to send user data to server and get a token
//         // We will also need to handle errors if sign up failed
//         // After getting token, we need to persist the token using `AsyncStorage`
//         // In the example, we'll use a dummy token

//         dispatch({type: 'SIGN_IN', token: 'notyet'});
//       },
//     }),
//     [],
//   );
//   console.log(state);
//   return (
//     <AuthContext.Provider value={authContext}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           {state.isLoading ? (
//             // We haven't finished checking for the token yet
//             <Stack.Screen name="Splash" component={SplashScreen} />
//           ) : state.userToken == '0' ? (
//             // No token found, user isn't signed in
//             <Stack.Screen
//               name="SignIn"
//               component={SignInScreen}
//               options={{
//                 title: 'Sign in',
//                 // When logging out, a pop animation feels intuitive
//                 animationTypeForReplace: state.isSignout ? 'pop' : 'push',
//               }}
//             />
//           ) : (
//             // User is signed in
//             <Stack.Screen name="Home" component={HomeScreen} />
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     margin: 16,
//     flex: 1,
//     alignItems: 'flex-start',
//     justifyContent: 'center',
//   },
//   input: {
//     fontSize: 16,
//   },
// });
