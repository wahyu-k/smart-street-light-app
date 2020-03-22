import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {RefreshControl, ScrollView, View, Text} from 'react-native';
import {connect} from 'react-redux';
import LastUpdateMod from '../../modules/LastUpdateMod';
import PowerMod from '../../modules/PowerMod';
import DataClimateOrg from '../../organism/DataClimateOrg';
import DataLocationOrg from '../../organism/DataLocationOrg';
import DataVoltageOrg from '../../organism/DataVoltageOrg';
import FlowchartOrg from '../../organism/FlowchartOrg';
import * as action from '../../redux/action';
import {useIsFocused} from '@react-navigation/native';

class Home extends Component {
  // componentDidMount() {
  //   //Here is the Trick
  //   const {navigation} = this.props;
  //   //Adding an event listner om focus
  //   //So whenever the screen will have focus it will set the state to zero
  //   this.focusListener = navigation.addListener('didFocus', () => {
  //     alert('fokus');
  //   });
  // }
  // componentWillUnmount() {
  //   // Remove the event listener before removing the screen from the stack
  //   this.focusListener.remove();
  // }

  userId = 1;
  index = 0;
  constructor(props) {
    super(props);
    this.getStoredData('index');
    this.getStoredData('userId');
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
        switch (key) {
          case 'index':
            this.index = value;
            // this.props.loadData(this.userId, this.index);
            // this.forceUpdate();
            break;
          case 'userId':
            this.userId = value;
            // this.props.loadData(this.userId, this.index);
            // this.forceUpdate();
            break;
          default:
            break;
        }
        this.props.loadData(this.userId, this.index);
        this.forceUpdate();
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
              this.getStoredData('index');
              this.getStoredData('userId');
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
    index: state.index,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: (userId, data) => dispatch(action.loadData(userId, data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
