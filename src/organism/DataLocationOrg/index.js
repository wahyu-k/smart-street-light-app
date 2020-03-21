import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import DataTitleMod from '../../modules/DataTitleMod';
import DataValueMod from '../../modules/DataValueMod';
import styles from '../../styles/styles.js';

class DataLocationOrg extends Component {
  // state={

  // }
  render() {
    // const sub = this.props.data.device_id;
    // const sub = this.props.alldata[0].name;
    // console.log('sub:' + sub);
    return (
      <View style={styles.dataWrapOrg}>
        <DataTitleMod title="Location" src="location-city" />
        <DataValueMod title="Device Id: " value={this.props.data.device_id} />
        <DataValueMod
          title="Device Name: "
          value={
            this.props.alldata[parseInt(this.props.data.device_id) - 1].name
          }
        />
        <DataValueMod title="Latitude: " value={this.props.data.lat} />
        <DataValueMod title="Longitude: " value={this.props.data.lng} />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    alldata: state.alldata,
  };
}

export default connect(mapStateToProps)(DataLocationOrg);
