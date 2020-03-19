import axios from 'axios';
import React, {Component} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {connect} from 'react-redux';
import LastUpdateMod from '../../modules/LastUpdateMod';
import PowerMod from '../../modules/PowerMod';
import DataClimateOrg from '../../organism/DataClimateOrg';
import DataLocationOrg from '../../organism/DataLocationOrg';
import DataVoltageOrg from '../../organism/DataVoltageOrg';
import FlowchartOrg from '../../organism/FlowchartOrg';

class Home extends Component {
  state = {
    loading: true,
    data: [],
    refreshing: false,
  };
  componentDidMount = () => {
    this.setState({
      loading: true,
      refreshing: true,
    });
    axios({
      method: 'get',
      url: 'http://iot.arduinosolo.com/json_data.php?device_id=2',
      timeout: 10000,
    })
      .then(response =>
        this.setState({
          loading: false,
          data: response.data,
          refreshing: false,
        }),
      )
      .then(() => {
        console.log(this.state.data);
      });
    // .then(response => { console.log(response.data) })
    // .catch(error => console.error('timeout exceeded'))
  };

  onRefresh = () => {
    this.componentDidMount();
  };

  render() {
    return (
      <ScrollView
        style={{flex: 1, backgroundColor: 'white', position: 'relative'}}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={this.onRefresh}
          />
        }>
        <View style={{flex: 1}}>
          <LastUpdateMod date={this.state.data.date} />
          <FlowchartOrg chg={this.state.data.c < 0 ? true : false} />
          <PowerMod
            power={Math.abs(
              this.state.data.v_tot * this.state.data.c * 0.8,
            ).toFixed(2)}
          />
          <DataVoltageOrg
            v1={this.props.data.v1}
            v2={this.state.data.v2}
            v3={this.state.data.v3}
            v4={this.state.data.v4}
            v_tot={this.state.data.v_tot}
          />
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

function stateToProps(state) {
  return {
    data: state.data,
  };
}

export default connect(stateToProps)(Home);
