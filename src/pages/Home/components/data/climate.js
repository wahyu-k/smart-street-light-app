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

const ROOT_TEXT = text.home.data.climate;
const T_TITLE = ROOT_TEXT.title;

const ROOT_ICON = icon.home.data;
const I_CLIMATE = ROOT_ICON.climate;

class Climate extends Component {
  render() {
    this.value = this.props.allData[this.props.index].t;
    return (
      <View style={S_VIEW}>
        <Title title={T_TITLE} src={I_CLIMATE} />
        <List title="Sensor 1: " value={this.value} unit=" °C" />
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
