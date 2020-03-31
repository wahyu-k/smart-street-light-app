import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {connect} from 'react-redux';
import style from '../../../additional/style';
import text from '../../../additional/text';

const ROOT_STYLE = style.home.lastUpdate;
const S_VIEW = ROOT_STYLE.view;
const S_TEXT = ROOT_STYLE.text;

const ROOT_TEXT = text.home.lastUpdate;
const T_TEXT = ROOT_TEXT;
class LastUpdate extends Component {
  render() {
    this.date = this.props.allData[this.props.index].date;
    return (
      <View style={S_VIEW}>
        <Text>{T_TEXT}</Text>
        <Text style={S_TEXT}>{this.date}</Text>
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

export default connect(mapStateToProps)(LastUpdate);
