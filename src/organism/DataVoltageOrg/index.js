import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import DataTitleMod from '../../modules/DataTitleMod';
import DataValueMod from '../../modules/DataValueMod';
import styles from '../../styles/styles.js';

class DataVoltageOrg extends Component {
  render() {
    return (
      <View style={styles.dataWrapOrg}>
        <DataTitleMod title="Voltage" src="local-gas-station" />
        <DataValueMod title="Cell 1: " value={this.props.data.v1} unit=" V" />
        <DataValueMod title="Cell 2: " value={this.props.data.v2} unit=" V" />
        <DataValueMod title="Cell 3: " value={this.props.data.v3} unit=" V" />
        <DataValueMod title="Cell 4: " value={this.props.data.v4} unit=" V" />
        <DataValueMod
          title="Total : "
          value={this.props.data.v_tot}
          unit=" V"
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(DataVoltageOrg);
