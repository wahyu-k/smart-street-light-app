import AsyncStorage from '@react-native-community/async-storage';
import React, { Component } from 'react';
import {
  RefreshControl,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import style from '../../additional/style';
import * as action from '../../redux/action';
import Climate from './components/data/climate';
import Location from './components/data/location';
import Voltage from './components/data/voltage';
import Flowchart from './components/flowchart/flowchart';
import LastUpdate from './components/lastUpdate';
import Power from './components/power';

const ROOT_STYLE = style.home;
const S_SCROLL_VIEW = ROOT_STYLE.scrollView;

class Home extends Component {
  // when component already mounted, executing loadData function
  componentDidMount() {
    this.loadData();
  }

  // loadData function used to load the userId props that store on redux
  loadData = () => {
    this.props.loadData({ userId: this.props.userId });
  };

  // render the MainApp display
  render() {
    return (
      // Scrollview used to control the refresh method
      <ScrollView
        style={S_SCROLL_VIEW}
        refreshControl={
          <RefreshControl
            // getting the loading props from redux that wait the redux-thunk to finish
            refreshing={this.props.isLoading}
            // when the refresh control swipped down, execute the loadData function
            onRefresh={() => this.loadData()}
          />
        }>
        <LastUpdate />
        <Flowchart />
        <Power />
        <Voltage />
        <Climate />
        <Location />
      </ScrollView>
    );
  }
}

//  basic function to use redux props in this page
function mapStateToProps(state) {
  return {
    allData: state.allData,
    isLoading: state.isLoading,
    userId: state.loginData.userId,
  };
}

//  basic function to use redux action in this page
function mapDispatchToProps(dispatch) {
  return {
    loadData: ({ userId }) => dispatch(action.loadData({ userId })),
    setLoginData: ({ loginData }) =>
      dispatch(action.setLoginData({ loginData })),
  };
}

//  connecting the map function with redux to this page
export default connect(mapStateToProps, mapDispatchToProps)(Home);
