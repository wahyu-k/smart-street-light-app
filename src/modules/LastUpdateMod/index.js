import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../styles/styles.js';

class LastUpdateMod extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row', margin: 16}}>
        <Text>Last Update:</Text>
        <Text style={styles.lastUpdateText}>{this.props.data.date}</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(mapStateToProps)(LastUpdateMod);
