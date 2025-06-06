import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Component} from 'react';
import React from 'react';

export default class dimensions extends Component<{}, {}> {
  render() {
    return (
      <View style={[styles.container]}>
        <View>
          <Text>Tv</Text>
        </View>
        <View>
          <Text>Phone</Text>
        </View>
        <View>
          <Text>iPad</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})