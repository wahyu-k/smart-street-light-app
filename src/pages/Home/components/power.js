import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../../styles/styles';

class Power extends Component {
  render() {
    this.powerEq = Math.abs(
      this.props.allData[this.props.index].c *
        this.props.allData[this.props.index].v_tot,
    ).toFixed(2);
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
    allData: state.allData,
    index: state.index,
  };
}

export default connect(mapStateToProps)(Power);
