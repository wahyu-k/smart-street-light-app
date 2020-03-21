import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import LastUpdateMod from '../../modules/LastUpdateMod';
import PowerMod from '../../modules/PowerMod';
import DataClimateOrg from '../../organism/DataClimateOrg';
import DataLocationOrg from '../../organism/DataLocationOrg';
import DataVoltageOrg from '../../organism/DataVoltageOrg';
import FlowchartOrg from '../../organism/FlowchartOrg';
import * as action from '../../redux/action';

class Home extends Component {
  userId = 1;
  deviceId = 0;
  constructor(props) {
    super(props);
    this.getStoredData('deviceId');
    // console.log(this.deviceId);
    // this.props.loadData(this.userId, this.deviceId);
  }

  storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {}
  };

  getStoredData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        this.deviceId = value;
        this.props.loadData(this.userId, this.deviceId);
        this.forceUpdate();
        console.log('deviceId:' + this.deviceId);
      }
    } catch (e) {}
  };

  render() {
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: 'white', position: 'relative'}}
        refreshControl={
          <RefreshControl
            refreshing={this.props.isLoading}
            onRefresh={() => {
              this.getStoredData('deviceId');
              // console.log(this.deviceId);
              // this.props.loadData(this.userId, this.deviceId);
              // this.forceUpdate();
            }}
          />
        }>
        <View style={{flex: 1}}>
          <LastUpdateMod />
          <FlowchartOrg />
          <PowerMod />
          <DataVoltageOrg />
          <DataClimateOrg />
          <DataLocationOrg />
        </View>
        <View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}></View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    isLoading: state.isLoading,
    error: state.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: (userId, data) => dispatch(action.loadData(userId, data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
