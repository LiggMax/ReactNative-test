import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
import Index from './src/ui/test/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';


function App(): React.JSX.Element {
  return (
      <NavigationContainer>
          <StatusBar
            translucent={true} // 设置状态栏透明
            barStyle="dark-content" // 设置状态栏字体为黑色
            backgroundColor="transparent" // 状态栏背景色为透明
          />
          <Index/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
