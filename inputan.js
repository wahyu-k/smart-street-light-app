import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';

class Inputan extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Inputan</Text>
        <TextInput
          style={{height: 60, width: 150, borderWidth: 4}}
          onChangeText={this.props.value3}
        />
      </View>
    );
  }
}

function stateToProps(state) {
  return {
    value3: state.value3,
  };
}

export default connect(stateToProps)(Inputan);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
