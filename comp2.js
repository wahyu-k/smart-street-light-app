import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';

class Comp2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.value2}</Text>
      </View>
    );
  }
}

function stateToProps(state) {
  return {
    value2: state.value2,
  };
}

export default connect(stateToProps)(Comp2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
