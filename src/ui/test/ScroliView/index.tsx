import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function index() {
  return (
    <View>
      <Text style={styles.text}>
        Hello World
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
});