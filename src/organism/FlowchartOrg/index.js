import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import ArrowAtom from '../../atoms/ArrowAtom';
import BatteryMod from '../../modules/BatteryMod';
import LoadMod from '../../modules/LoadMod';
import SolarPanelMod from '../../modules/SolarPanelMod';
import styles from '../../styles/styles.js';

class FlowchartOrg extends Component {
  render() {
    this.chgLogic = this.props.allData[this.props.index].c > 0 ? true : false;
    return (
      <View style={styles.flowchartOrgWrap}>
        <SolarPanelMod
          c={this.chgLogic ? this.props.allData[this.props.index].c : '0.00'}
        />
        <ArrowAtom />
        <BatteryMod />
        <ArrowAtom />
        <LoadMod
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

export default connect(mapStateToProps)(FlowchartOrg);
