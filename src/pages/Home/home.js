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
import axios from 'axios';

class Home extends Component {
  componentDidMount() {
    this.props.loadData({userId: 1});
  }
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: 'white', position: 'relative'}}
        refreshControl={
          <RefreshControl
            refreshing={this.props.isLoading}
            onRefresh={() => this.props.loadData({userId: 1})}
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
    allData: state.allData,
    isLoading: state.isLoading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: ({userId}) => dispatch(action.loadData2({userId})),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
