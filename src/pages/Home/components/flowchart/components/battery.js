import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../../../../styles/styles';

class Battery extends Component {
  render() {
    this.maxVTot = 13.4;
    this.percentage =
      this.props.allData[this.props.index].v_tot > this.maxVTot
        ? 100
        : (
            (this.props.allData[this.props.index].v_tot / this.maxVTot) *
            100
          ).toFixed(1);
    return (
      <View style={styles.batteryWrap}>
        <View
          style={{
            backgroundColor: '#80e0e0',
            position: 'absolute',
            borderRadius: 6,
            height: '100%',
            width: isNaN(this.percentage) ? 0 : (this.percentage / 100) * 131,
            alignSelf: 'flex-start',
          }}></View>
        <View style={styles.flexToRow}>
          <Text style={styles.percentageText}>{this.percentage}</Text>
          <Text style={styles.percentageText}>%</Text>
        </View>
        <View style={styles.flexToRow}>
          <Text>{this.props.allData[this.props.index].v_tot}</Text>
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
    allData: state.allData,
    index: state.index,
  };
}

export default connect(mapStateToProps)(Battery);
