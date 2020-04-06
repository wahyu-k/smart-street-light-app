import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';
import color from '../../additional/color';
import style from '../../additional/style';

const ROOT_COLOR = color;
const ROOT_STYLE = style.allData;

const S_VIEW = ROOT_STYLE.view;
const S_INDICATOR = ROOT_STYLE.indicator;

class AllData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
    };
  }

  hideSpinner() {
    this.setState({
      visible: false,
    });
  }

  // function to refresh the view (forceUpdete) when this screen is focus
  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.forceUpdate();
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    let deviceId = this.props.allData[this.props.index].device_id;
    return (
      <View style={S_VIEW}>
        <WebView
          onLoad={() => this.hideSpinner()}
          source={{
            uri: `https://iot.arduinosolo.com/angular/index.html?device_id=${deviceId}`,
          }}
          onError={(error) => {
            alert(error);
          }}
        />
        {this.state.visible && (
          <ActivityIndicator
            style={S_INDICATOR}
            color={ROOT_COLOR.mainColor}
            size={60}
          />
        )}
      </View>
    );
  }
}

function mapStatetoProps(state) {
  return {
    allData: state.allData,
    index: state.index,
  };
}

export default connect(mapStatetoProps)(AllData);
