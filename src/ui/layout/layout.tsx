import React from 'react';
import {Text, StyleSheet, View, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

/**
 * 收藏页面
 */
function FavoriteScreen() {
  return (
    <View>
      <Text>Favorite Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator()
/**
 * 用户页面
 */
function UserScreen() {
  return (
    <View>
      <Text>User Screen</Text>
    </View>
  );
}
export default function index() {
  return (

    <Tab.Navigator>

      <Tab.Screen
       options={ {
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
const styles = StyleSheet.create({});