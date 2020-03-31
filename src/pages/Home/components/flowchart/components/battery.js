import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import style from '../../../../../additional/style';

const ROOT_STYLE = style.home.flowchart.battery;
const S_VIEW = ROOT_STYLE.view;
const S_BAT_FILL = ROOT_STYLE.fill;
const S_TEXT_VIEW = ROOT_STYLE.text.view;
const S_PERCENTAGE = ROOT_STYLE.text.percentage;
class Battery extends Component {
  render() {
    this.maxVTot = 13.4;
    this.percentage =
      this.props.allData[this.props.index].v_tot > this.maxVTot
        ? 100
        : (
            (this.props.allData[this.props.index].v_tot / this.maxVTot) *
            100
          ).toFixed(1);
    this.fill = isNaN(this.percentage) ? 0 : (this.percentage / 100) * 131;
    this.vTot = this.props.allData[this.props.index].v_tot;
    return (
      <View style={S_VIEW}>
        <View
          style={{
            ...S_BAT_FILL,
            width: this.fill,
          }}></View>
        <View style={S_TEXT_VIEW}>
          <Text style={S_PERCENTAGE}>{this.percentage}</Text>
          <Text style={S_PERCENTAGE}>%</Text>
        </View>
        <View style={S_TEXT_VIEW}>
          <Text>{this.vTot}</Text>
          <Text> V of </Text>
          <Text>{this.maxVTot}</Text>
          <Text> V</Text>
        </View>
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

export default connect(mapStateToProps)(Battery);
