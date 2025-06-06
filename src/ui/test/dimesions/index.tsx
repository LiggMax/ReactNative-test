import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Component} from 'react';
import React from 'react';

export default class dimensions extends Component<{}, {}> {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.itemBase]}>
          <Text style={[styles.h3]}>Tv</Text>
        </View>

        <View style={[styles.itemBase]}>
          <Text style={[styles.h3]}>Phone</Text>
        </View>

        <View style={[styles.itemBase]}>
          <Text style={[styles.h3]}>iPad</Text>
        </View>

        <View style={[styles.itemBase]}>
          <Text style={[styles.h3]}>Mac</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(92,255,138,0.78)',
    flexWrap: 'wrap'
  },
  itemBase: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(128,128,255,0.78)',
    width: Dimensions.get('window').width / 3,
    height: 100,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.78)',
  },
  h3: {
    fontSize: 20,
  },
});
