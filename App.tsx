/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {Video} from 'react-native-video';
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={[backgroundStyle, styles.container]}>
      <ScrollView
        style={backgroundStyle}
        contentContainerStyle={styles.scrollContainer}>

        <Text style={styles.title}>视频播放器示例</Text>

        <Video
          source={{
            uri: 'https://play.xfvod.pro/Z/Z-%E5%92%92%E6%9C%AF%E5%9B%9E%E6%88%98/%E5%89%A7%E5%9C%BA%E7%89%88.mp4'
          }}
          style={styles.video}
          controls={true}
          resizeMode="contain"
          paused={false}
          repeat={true}
        />
        
        <Text style={styles.description}>
          这是一个使用 react-native-video 组件的视频播放器示例
        </Text>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
    color: '#666',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
