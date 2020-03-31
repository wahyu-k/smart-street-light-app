import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import style from '../../../../additional/style';
import Arrow from './components/arrow';
import Battery from './components/battery';
import Load from './components/load';
import Solar from './components/solar';

const ROOT_STYLE = style.home.flowchart;
const S_VIEW = ROOT_STYLE.view;

class Flowchart extends Component {
  render() {
    this.chgLogic = this.props.allData[this.props.index].c > 0 ? true : false;
    this.cSolar = this.chgLogic
      ? this.props.allData[this.props.index].c
      : '0.00';
    this.cLoad = !this.chgLogic
      ? Math.abs(this.props.allData[this.props.index].c)
      : '0.00';
    return (
      <View style={S_VIEW}>
        <Solar c={this.cSolar} />
        <Arrow />
        <Battery />
        <Arrow />
        <Load chgLogic={this.chgLogic} c={this.cLoad} />
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
