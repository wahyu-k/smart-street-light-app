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
        <DataValueMod
          title="Device Id: "
          value={this.props.allData[this.props.index].device_id}
        />
        <DataValueMod
          title="Device Name: "
          value={this.props.allData[this.props.index].name}
        />
        <DataValueMod
          title="Latitude: "
          value={this.props.allData[this.props.index].lat}
        />
        <DataValueMod
          title="Longitude: "
          value={this.props.allData[this.props.index].lng}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    allData: state.allData,
    index: state.index,
  };
}

export default connect(mapStateToProps)(DataLocationOrg);
