import React, {Component} from 'react';
import {Text, StyleSheet, View, StatusBar, Switch} from 'react-native';

export default class Index extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isSwitchOn: false,
    };
  }

  toggleSwitch = () => {
    this.setState((prevState: {isSwitchOn: any}) => ({
      isSwitchOn: !prevState.isSwitchOn,
    }));
  };

  render() {
    const backgroundColor = this.state.isSwitchOn ? '#ff6347' : '#cdffc1';
    return (
      <View style={{height: '100%', backgroundColor}}>
        <StatusBar
          backgroundColor={backgroundColor}
          barStyle="light-content"
          translucent={false}
        />
        <View style={[styles.container]}>
          <Switch
            trackColor={{false: '#000000', true: '#81b0ff'}}
            thumbColor={this.state.isSwitchOn ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={this.toggleSwitch}
            value={this.state.isSwitchOn}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});