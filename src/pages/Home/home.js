import React, {Component} from 'react';
import {RefreshControl, ScrollView, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import style from '../../additional/style';
import * as action from '../../redux/action';
import Climate from './components/data/climate';
import Location from './components/data/location';
import Voltage from './components/data/voltage';
import Flowchart from './components/flowchart/flowchart';
import LastUpdate from './components/lastUpdate';
import Power from './components/power';
import AsyncStorage from '@react-native-community/async-storage';

const ROOT_STYLE = style.home;
const S_SCROLL_VIEW = ROOT_STYLE.scrollView;

class Home extends Component {
  componentDidMount() {
    this.loadData();
  }
  constructor(props) {
    super(props);
  }

  loadData = () => {
    this.props.loadData({userId: this.props.userId});
  };

  render() {
    return (
      <ScrollView
        style={S_SCROLL_VIEW}
        refreshControl={
          <RefreshControl
            refreshing={this.props.isLoading}
            onRefresh={() => this.loadData()}
          />
        }>
        <LastUpdate />
        <Flowchart />
        <Power />
        <Voltage />
        <Climate />
        <Location />
        <TouchableOpacity
          style={{backgroundColor: 'pink', height: 50, width: 130}}
          onPress={() => {
            this.storeData();
          }}>
          <Text>LOGOUT</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
  storeData = async () => {
    try {
      await AsyncStorage.setItem('USER_ID', '0');
      this.props.setUserId({userId: '0'});
    } catch (e) {
      alert(e);
    }
  };
}

function mapStateToProps(state) {
  return {
    allData: state.allData,
    isLoading: state.isLoading,
    userId: state.userId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: ({userId}) => dispatch(action.loadData({userId})),
    setUserId: ({userId}) => dispatch(action.setUserId({userId})),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
