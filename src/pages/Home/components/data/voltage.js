import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../../../styles/styles';
import List from './components/list';
import Title from './components/title';

class Voltage extends Component {
  render() {
    return (
      <View style={styles.dataWrapOrg}>
        <Title title="Voltage" src="local-gas-station" />
        <List
          title="Cell 1: "
          value={this.props.allData[this.props.index].v1}
          unit=" V"
        />
        <List
          title="Cell 2: "
          value={this.props.allData[this.props.index].v2}
          unit=" V"
        />
        <List
          title="Cell 3: "
          value={this.props.allData[this.props.index].v3}
          unit=" V"
        />
        <List
          title="Cell 4: "
          value={this.props.allData[this.props.index].v4}
          unit=" V"
        />
        <List
          title="Total : "
          value={this.props.allData[this.props.index].v_tot}
          unit=" V"
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

export default connect(mapStateToProps)(Voltage);
