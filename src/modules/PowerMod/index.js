import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../styles/styles.js';

class PowerMod extends Component {
  render() {
    this.powerEq = Math.abs(this.props.data.c * this.props.data.v_tot).toFixed(2);
    return (
      <View style={styles.powerWrap}>
        <Text style={styles.powerText}>Power: </Text>
        <Text style={styles.powerText}>{this.powerEq}</Text>
        <Text style={styles.powerText}> W</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(PowerMod);
