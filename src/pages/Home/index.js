import React from 'react';
import { View } from 'react-native';
import LastUpdateMod from '../../modules/LastUpdateMod';
import PowerMod from '../../modules/PowerMod';
import DataClimateOrg from '../../organism/DataClimateOrg';
import DataLocationOrg from '../../organism/DataLocationOrg';
import DataVoltageOrg from '../../organism/DataVoltageOrg';
import FlowchartOrg from '../../organism/FlowchartOrg';

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1 }}>
                <LastUpdateMod />
                <FlowchartOrg />
                <PowerMod />
                <DataVoltageOrg v1="3.33"/>
                <DataClimateOrg />
                <DataLocationOrg />
            </View>
        </View >
    )
}

export default Home;