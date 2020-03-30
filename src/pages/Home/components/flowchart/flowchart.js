import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import styles from '../../../../styles/styles';
import Arrow from './components/arrow';
import Battery from './components/battery';
import Load from './components/load';
import Solar from './components/solar';

class Flowchart extends Component {
  render() {
    this.chgLogic = this.props.allData[this.props.index].c > 0 ? true : false;
    return (
      <View style={styles.flowchartOrgWrap}>
        <Solar
          c={this.chgLogic ? this.props.allData[this.props.index].c : '0.00'}
        />
        <Arrow />
        <Battery />
        <Arrow />
        <Load
          chgLogic={this.chgLogic}
          c={
            !this.chgLogic
              ? Math.abs(this.props.allData[this.props.index].c)
              : '0.00'
          }
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

export default connect(mapStateToProps)(Flowchart);
