import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Counter from './component';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  count: 0,
	value2: 'ga ada',
	value3 :'0',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INC':
      return {
				...state,
        count: state.count + 1,
      };
    case 'DEC':
      return {
				...state,
        count: state.count - 1,
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Counter />
      </View>
    </Provider>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
