import React from 'react';
import {Text, StyleSheet, View, StatusBar, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './test/material-top-tabs/index.tsx'
import Image from './test/Image/index.tsx'
import User from './test/Icon/VectorIconsDemo.tsx'


function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Home/>
      </View>
    </SafeAreaView>
  );
}

/**
 * 收藏页面
 */
function FavoriteScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image/>
      </View>
    </SafeAreaView>
  );
}

/**
 * 用户页面
 */
function UserScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <User/>
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator()

export default function index() {
  return (

    <Tab.Navigator>

      <Tab.Screen
       options={ {
         headerShown: false,
         title: '首页',
         tabBarIcon:({color,size}) =>(
           <Icon name="home-outline" color={color} size={size}/>
         )
       }}
       name={'Home'}
       component={HomeScreen}
      />

      <Tab.Screen
       options={ {
         title: '收藏',
         tabBarIcon:({color,size}) =>(
           <Icon name="heart-outline" color={color} size={size}/>
         )
       }}
       name={'Favorite'}
       component={FavoriteScreen}
      />

      <Tab.Screen
        options={ {
         title: '用户',
         tabBarIcon:({color,size}) =>(
           <Icon name="person-outline" color={color} size={size}/>
         )
       }}
       name={'User'}
       component={UserScreen}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
});