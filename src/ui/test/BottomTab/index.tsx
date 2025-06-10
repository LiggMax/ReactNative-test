import React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Image from '../Image/index.tsx';
import Swiper from '../Swiper';
import Icon from '../Icon/VectorIconsDemo.tsx'

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
      <Icon />
    </View>
  );

}
const Tab = createBottomTabNavigator();

export default function index() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: '推荐',
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen options={{
        title: '图标',
      }}
      name="Icon"
      component={IconScreen}
      />
      <Tab.Screen
        options={{
          title: '新闻',
        }}
        name="New"
        component={NewScreen}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({});
