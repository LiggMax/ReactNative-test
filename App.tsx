import React from 'react';
import {
  StatusBar,
  View,
  StyleSheet,
} from 'react-native';
// import SectionListDemo from './src/ui/test/SectionList';
import SwiperComponent from './src/ui/test/Swiper';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true} // 设置状态栏透明
        barStyle="dark-content" // 设置状态栏字体为黑色
        backgroundColor="transparent" // 状态栏背景色为透明
      />
      <SwiperComponent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
