import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';

/**
 * 推荐页面
 */
function Recommend() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>推荐</Text>
      </View>
    </SafeAreaView>
  );
}

/**
 * 热门
 */
function Hot() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>热门</Text>
      </View>
    </SafeAreaView>
  );
}

/**
 * 排行
 */
function Rank() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>排行</Text>
      </View>
    </SafeAreaView>
  );
}

const MTab = createMaterialTopTabNavigator();
export default function index() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <MTab.Navigator>
        <MTab.Screen name="推荐" component={Recommend} />
        <MTab.Screen name="热门" component={Hot} />
        <MTab.Screen name="排行" component={Rank} />
      </MTab.Navigator>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({});
