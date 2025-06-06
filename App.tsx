import React from 'react';
import {
  StatusBar,
  View,
} from 'react-native';
// import Index from './src/ui/test/alert_Button/index.tsx'
import Index from './src/ui/test/Image'

function App(): React.JSX.Element {
  return (
    <View>
      <StatusBar
        translucent={true} // 设置状态栏透明
        barStyle="dark-content" // 设置状态栏字体为黑色
        backgroundColor="transparent" // 状态栏背景色为透明
      />
      <Index/>
    </View>
  );
}
export default App;
