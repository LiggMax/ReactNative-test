import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class index extends Component<{}, {}> {
  render() {
    return (
      <View>
        <View>
          <Text style={{fontSize: 40, marginHorizontal: 20}}>布局</Text>
          <Text style={{fontSize: 30, color: 'red'}}>Hello World</Text>
          <Text style={{fontSize: 30, backgroundColor: 'red'}}>
            Hello World
          </Text>
          <Text style={[styles.instructions]}>Hello React Native</Text>
        </View>

        <Text style={[styles.title]}>反转布局</Text>
        <View style={[styles.flexColumnReverse]}>
          <Text style={[styles.test]}>vue</Text>
          <Text style={[styles.test]}>React</Text>
          <Text style={[styles.test]}>React Native</Text>
        </View>

        <Text style={[styles.title]}>横向布局</Text>
        <View style={[styles.flexRow]}>
          <Text style={[styles.test]}>vue </Text>
          <Text style={[styles.test]}>React </Text>
          <Text style={[styles.test]}>React Native</Text>
        </View>

        <Text style={[styles.title]}>横向右对齐布局</Text>
        <View style={[styles.flexRowReverse]}>
          <Text style={[styles.test]}>vue </Text>
          <Text style={[styles.test]}>React </Text>
          <Text style={[styles.test]}>React Native</Text>
        </View>
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
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#42fcf2',
    fontWeight: 'bold',
  },
  test: {
    textAlign: 'center',
    fontSize: 30,
  },
  flexColumnReverse: {
    borderWidth: 2,
    borderColor: '#00ff38',
    flexDirection: 'column-reverse',
  },
  flexRow: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#00ff38',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
    borderColor: '#00ff38',
  },
});
