import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../../../styles/styles';
import List from './components/list';
import Title from './components/title';

class Location extends Component {
  render() {
    return (
      <View style={styles.dataWrapOrg}>
        <Title title="Location" src="location-city" />
        <List
          title="Device Id: "
          value={this.props.allData[this.props.index].device_id}
        />
        <List
          title="Device Name: "
          value={this.props.allData[this.props.index].name}
        />
        <List
          title="Latitude: "
          value={this.props.allData[this.props.index].lat}
        />
        <List
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

export default connect(mapStateToProps)(Location);
