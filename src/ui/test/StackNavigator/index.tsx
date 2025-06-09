import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity, Alert} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(props: {navigation: {navigate: (arg0: string) => void}}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title={'跳转新闻页面'}
        onPress={() => props.navigation.navigate('New')}
      />
    </View>
  );
}

function NewScreen(props: {navigation: {navigate: (arg0: string) => void}}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>New Screen</Text>
      <Button
        title={'跳转首页'}
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default function index() {
    return (
        <Stack.Navigator initialRouteName={'New'} screenOptions={{headerShown: true}}>
            <Stack.Screen
                options={{
                    title: '首页',
                    headerStyle: {
                        backgroundColor: '#3efbfe',
                    },
                    headerTintColor: '#000000',
                    headerRight: () => (
                        <TouchableOpacity onPress={() => {Alert.alert('被点击了')}}>
                            <Text>按钮</Text>
                        </TouchableOpacity>
                    ),
                }}
                name="Home" component={HomeScreen} />
            <Stack.Screen
                options={{
                    title: '新闻',
                    headerTintColor:  '#70f6a0',
                }}
                name="New" component={NewScreen}/>
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#6dfb00',
    },
});