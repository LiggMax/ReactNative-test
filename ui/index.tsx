import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class index extends Component<{}, {}> {
  render() {
    return (
      <View style={{flex: 0, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 30, color: 'red'}}>Hello World</Text>
        <Text style={{fontSize: 30, backgroundColor: 'red'}}>Hello World</Text>

        <Text style={[styles.welcome]}>Hello React Native</Text>
        <Text style={[styles.instructions]}>Hello React Native</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
    marginBottom: 30,
    margin: 10,
  },
  instructions: {
    color: '#2d68ff',
    fontWeight: 800,
  },
});
