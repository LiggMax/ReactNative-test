import React from 'react';
import {Text, StyleSheet, View, Image, Dimensions, ScrollView, SafeAreaView, StatusBar} from 'react-native';

export default function index() {
  return (
    <SafeAreaView style={styles.safeArea}>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
          <Image
            style={[styles.itemImage]}
            source={require('../../../assets/image/02.png')}
          />
          <Image
            style={[styles.itemImage]}
            source={require('../../../assets/image/02.png')}
          />
          <Image
            style={[styles.itemImage]}
            source={require('../../../assets/image/02.png')}
          />
          <Image
            style={[styles.itemImage]}
            source={require('../../../assets/image/02.png')}
          />
          <Image
            style={[styles.itemImage]}
            source={{
              uri: 'https://picgg.cycimg.me/banner/GgBeWlsaIAAV4BY.webp',
            }}
          />
        </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeArea: {
    // 添加安全距离样式
    paddingTop: StatusBar.currentHeight
  },
  itemImage: {
    // 设置圆角
    borderRadius: 15,
    // 设置外边距
    marginTop: 10,
    width: Dimensions.get('window').width / 3, // 修改：宽度调整为屏幕宽度的一半
    height: Dimensions.get('window').height / 4,
    margin: 10, // 新增：添加外边距
  },
  margin: {
    // 设置外边距
    alignItems: 'center',
    marginBottom: 10,
  },
  horizontalContainer: {
    flexDirection: 'row', // 修改：设置横向布局
    justifyContent: 'space-between', // 修改：图片之间留有间距
  },
});