import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Platform,
  Alert,
} from 'react-native';

export default function index() {
  if (Platform.OS === 'ios') {
    Alert.alert('iOS',
      '当前是苹果环境',
    )
  } else if (Platform.OS === 'android') {
    Alert.alert('Android',
      '当前是安卓环境',
    )
  }

  return (
    <View>
      <View style={[styles.container]}>
        <ActivityIndicator size="small" color="#00d0ff" />
        <ActivityIndicator size="large" color="red" />
        <ActivityIndicator size={80} color="green" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#b9ffb6',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
