import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';

class AllData extends Component {
  deviceId = this.props.allData[this.props.index].device_id;
  render() {
    // console.log(JSON.stringify(this.props.allData[this.props.index], null, 2));
    return (
      <WebView
        source={{
          uri:
            'https://iot.arduinosolo.com/angular/index.html?device_id=' +
            this.deviceId,
        }}
        onNavigationStateChange={this.handleWebViewNavigationStateChange}
        // style={{marginTop: 20}}
      />
    );
  }
  handleWebViewNavigationStateChange = newNavState => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    const {url} = newNavState;
    if (!url) return;

    // handle certain doctypes
    if (url.includes('.pdf')) {
      this.webview.stopLoading();
      // open a modal with the PDF viewer
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes('?message=success')) {
      this.webview.stopLoading();
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes('?errors=true')) {
      this.webview.stopLoading();
    }

    // redirect somewhere else
    if (url.includes('google.com')) {
      const newURL = 'https://reactnative.dev/';
      const redirectTo = 'window.location = "' + newURL + '"';
      this.webview.injectJavaScript(redirectTo);
    }
  };
}

export default connect(mapStatetoProps)(AllData);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStatetoProps(state) {
  return {
    allData: state.allData,
    index: state.index,
  };
}
