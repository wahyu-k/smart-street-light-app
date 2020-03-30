import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../../../styles/styles';
import List from './components/list';
import Title from './components/title';

class Climate extends Component {
  render() {
    return (
      <View style={styles.dataWrapOrg}>
        <Title title="Climate" src="cloud" />
        <List
          title="Sensor 1: "
          value={this.props.allData[this.props.index].t}
          unit=" °C"
        />
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

export default connect(mapStateToProps)(Climate);
