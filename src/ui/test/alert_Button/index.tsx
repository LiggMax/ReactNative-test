import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, Alert} from 'react-native';

export default class Index extends Component<any, any> {
  createTwoButtonAlert = () =>{
    Alert.alert(
      "标题",
      "内容",
      [
        {
          text: '确定',
          onPress: () => {
            console.log('点击了确定')
          }
        },
        {
          text: '取消',
          onPress: () => {
            console.log('点击取消')
          }
        }
      ]
    )
  }
  createThreeButtonAlert = () =>{
    Alert.alert(
      "标题",
      "内容",
      [
        {
          text: '稍后',
          onPress: () => {
            console.log('稍后')
          }
        },
        {
          text: '确定',
          onPress: () => {
            console.log('点击了确定')
          }
        },
        {
          text: '取消',
          onPress: () => {
            console.log('点击取消')
          }
        }
      ]
    )
  }
  render() {
    return (
      <View style={[styles.container]}>
        <Text>Hello World</Text>
        <View style={[styles.itemBase]}>
          <View style={[styles.margin]}>
            <Button
              title="按钮"
              onPress={() => {
                Alert.alert('被点击了');
              }}
              color={'red'}
            />
          </View>
          <View style={[styles.margin]}>
            <Button
              title="按钮"
              onPress={this.createTwoButtonAlert}
              color={'blue'}
            />
          </View>
          <View style={[styles.margin]}>
            <Button
              title="三个按钮"
              onPress={this.createThreeButtonAlert}
              color={'green'}
            />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'baseline',
    margin: 20,
  },
  margin:{
    margin: 5,
  },
  itemBase:{
    flexDirection: 'row',
  }
});
