import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// 定义屏幕组件
function HomeScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>首页</Text>
      <Text style={styles.screenContent}>欢迎来到动漫应用</Text>
    </View>
  );
}

function ExploreScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>探索</Text>
      <Text style={styles.screenContent}>发现更多精彩动漫</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenTitle}>个人资料</Text>
      <Text style={styles.screenContent}>我的动漫收藏</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function BottomTabLayout() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '首页',
            tabBarLabel: '首页',
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={{
            title: '探索',
            tabBarLabel: '探索',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: '个人资料',
            tabBarLabel: '我的',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  screenContent: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
