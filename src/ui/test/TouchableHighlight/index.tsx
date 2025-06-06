import React from 'react';
import {Text, StyleSheet, View, Dimensions, TouchableHighlight, Alert, TouchableOpacity} from 'react-native';

export default function index() {
  return (
    <View style={[styles.container]}>
      <TouchableHighlight
      onPress={() => Alert.alert('被点击了')}
      >
        <View style={[styles.text]}>
          <Text>触碰高亮</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity
        onPress={() => Alert.alert('被点击了')}
      >
        <View style={[styles.text]}>
          <Text>触碰改变透明度</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    height: Dimensions.get('window').height,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    borderColor:'red',
    borderWidth:1,
    padding:10,
    borderRadius:5
  }
});