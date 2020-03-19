import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import DataTitleMod from '../../modules/DataTitleMod';
import DataValueMod from '../../modules/DataValueMod';
import styles from '../../styles/styles.js';

class DataClimateOrg extends Component {
  render() {
    return (
      <View style={styles.dataWrapOrg}>
        <DataTitleMod title="Climate" src="cloud" />
        <DataValueMod title="Sensor 1: " value={this.props.data.t} unit=" °C" />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(DataClimateOrg);
