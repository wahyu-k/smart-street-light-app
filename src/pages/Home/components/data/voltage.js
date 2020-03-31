import React, {Component} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import style from '../../../../additional/style';
import List from './components/list';
import Title from './components/title';
import text from '../../../../additional/text';
import icon from '../../../../additional/icon';

const ROOT_STYLE = style.home.data;
const S_VIEW = ROOT_STYLE.view;

const ROOT_TEXT = text.home.data.voltage;
const T_TITLE = ROOT_TEXT.title;
const T_V1 = ROOT_TEXT.v1;
const T_V2 = ROOT_TEXT.v2;
const T_V3 = ROOT_TEXT.v3;
const T_V4 = ROOT_TEXT.v4;
const T_VTOT = ROOT_TEXT.vTot;

const ROOT_ICON = icon.home.data;
const I_VOLTAGE = ROOT_ICON.voltage;
class Voltage extends Component {
  render() {
    this.root = this.props.allData[this.props.index];
    this.v1 = this.root.v1;
    this.v2 = this.root.v2;
    this.v3 = this.root.v3;
    this.v4 = this.root.v4;
    this.vTot = this.root.v_tot;
    return (
      <View style={S_VIEW}>
        <Title title={T_TITLE} src={I_VOLTAGE} />
        <List title={T_V1} value={this.v1} unit=" V" />
        <List title={T_V2} value={this.v2} unit=" V" />
        <List title={T_V3} value={this.v3} unit=" V" />
        <List title={T_V4} value={this.v4} unit=" V" />
        <List title={T_VTOT} value={this.vTot} unit=" V" />
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
