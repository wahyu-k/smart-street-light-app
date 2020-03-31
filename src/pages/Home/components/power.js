import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import style from '../../../additional/style';
import text from '../../../additional/text';

const ROOT_STYLE = style.home.power;
const S_TEXT = ROOT_STYLE.text;
const S_VIEW = ROOT_STYLE.view;

const ROOT_TEXT = text.home.power;
const T_POWER = ROOT_TEXT;
class Power extends Component {
  render() {
    this.powerEq = Math.abs(
      this.props.allData[this.props.index].c *
        this.props.allData[this.props.index].v_tot,
    ).toFixed(2);
    return (
      <View style={S_VIEW}>
        <Text style={S_TEXT}>{T_POWER}</Text>
        <Text style={S_TEXT}>{this.powerEq}</Text>
        <Text style={S_TEXT}> W</Text>
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

export default connect(mapStateToProps)(Power);
