import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Image from '../Image/index.tsx';
import Swiper from '../Swiper';
import IconDemo from '../Icon/VectorIconsDemo.tsx'
import Icon from 'react-native-vector-icons/Ionicons';

function HomeScreen(props: {navigation: {navigate: (arg0: string) => void}}) {
  return (
    <View>
      <Image />
    </View>
  );
}

function NewScreen(props: {navigation: {navigate: (arg0: string) => void}}) {
  return (
    <View>
      <Swiper />
      
    </View>
  );
}

function IconScreen(props: {navigation: {navigate: (arg0: string) => void}}) {
  return (
    <View>
      <IconDemo />
    </View>
  );

}
const Tab = createBottomTabNavigator();

export default function index() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#58bbf1',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        options={{
          title: '推荐',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen 
        options={{
          title: '图标',
          tabBarIcon: ({color, size}) => (
            <Icon name="apps-outline" color={color} size={size} />
          ),
        }}
        name="Icon"
        component={IconScreen}
      />
      <Tab.Screen
        options={{
          title: '新闻',
          tabBarIcon: ({color, size}) => (
            <Icon name="newspaper-outline" color={color} size={size} />
          ),
        }}
        name="New"
        component={NewScreen}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({});
