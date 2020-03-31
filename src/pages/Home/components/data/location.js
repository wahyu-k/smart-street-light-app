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

const ROOT_TEXT = text.home.data.location;
const T_TITLE = ROOT_TEXT.title;
const T_ID = ROOT_TEXT.id;
const T_NAME = ROOT_TEXT.name;
const T_LAT = ROOT_TEXT.lat;
const T_LNG = ROOT_TEXT.lng;

const ROOT_ICON = icon.home.data;
const I_LOCATION = ROOT_ICON.location;

class Location extends Component {
  render() {
    this.root = this.props.allData[this.props.index];
    this.id = this.root.device_id;
    this.name = this.root.name;
    this.lat = this.root.lat;
    this.lng = this.root.lng;
    return (
      <View style={S_VIEW}>
        <Title title={T_TITLE} src={I_LOCATION} />
        <List title={T_ID} value={this.id} />
        <List title={T_NAME} value={this.name} />
        <List title={T_LAT} value={this.lat} />
        <List title={T_LNG} value={this.lng} />
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

export default connect(mapStateToProps)(Location);
