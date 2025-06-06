import React from 'react';
import {Text, StyleSheet, View, Dimensions, TextInput} from 'react-native';

export default function index() {
  return (
    <View style={[styles.container]}>
      <TextInput  style={[styles.input]} placeholder="请输入内容"/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:Dimensions.get('window').width-20,
    margin:10,
    borderColor:'#000',
    borderWidth:1,
    paddingHorizontal:10,
  },
});
