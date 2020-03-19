import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../../styles/styles.js';
import {connect} from 'react-redux';

class BatteryMod extends Component {
  render() {
    this.maxVTot = 13.4;
    this.percentage =
      this.props.data.v_tot > this.maxVTot
        ? 100
        : ((this.props.data.v_tot / this.maxVTot) * 100).toFixed(1);
    return (
      <View style={styles.batteryWrap}>
        <View
          style={{
            backgroundColor: '#80e0e0',
            position: 'absolute',
            borderRadius: 6,
            height: '100%',
            width: (this.percentage / 100) * 131,
            alignSelf: 'flex-start',
          }}></View>
        <View style={styles.flexToRow}>
          <Text style={styles.percentageText}>{this.percentage}</Text>
          <Text style={styles.percentageText}>%</Text>
        </View>
        <View style={styles.flexToRow}>
          <Text>{this.props.data.v_tot}</Text>
          <Text> V of </Text>
          <Text>{this.maxVTot}</Text>
          <Text> V</Text>
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(BatteryMod);
