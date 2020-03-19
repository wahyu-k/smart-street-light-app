import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {connect} from 'react-redux';
import Comp2 from './comp2';
import Inputan from './inputan';

class Counter extends Component {
  inc = () => {
    this.props.dispatch({type: 'INC'});
  };
  dec = () => {
    this.props.dispatch({type: 'DEC'});
  };

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.inc} title="+" />
        <Text style={{fontSize: 40, margin: 20}}>{this.props.count + this.props.value3}</Text>
        <Button onPress={this.dec} title="-" />
        <Comp2 />
        <Inputan />
      </View>
    );
  }
}

function stateToProps(state) {
  return {
    value3: state.value3,
    count: state.count,
  };
}

export default connect(stateToProps)(Counter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
