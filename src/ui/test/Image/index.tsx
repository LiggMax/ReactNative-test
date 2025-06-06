import React from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';

export default function index() {
  return (
    <View style={[styles.container]}>
      <View style={[styles.margin]}>
        <Text>本地图片</Text>
        <View style={styles.horizontalContainer}>
          <Image
            style={[styles.itemImage]}
            source={require('../../../assets/image/02.png')}
          />
          <Image
            style={[styles.itemImage]}
            source={require('../../../assets/image/02.png')}
          />
        </View>
      </View>

      <View style={[styles.margin]}>
        <Text>网络图片</Text>
        <Image
          style={[styles.itemImage]}
          source={{
            uri: 'https://picgg.cycimg.me/banner/GgBeWlsaIAAV4BY.webp',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    // 设置圆角
    borderRadius: 15,
    // 设置外边距
    marginTop: 10,
    width: Dimensions.get('window').width / 2, // 修改：宽度调整为屏幕宽度的一半
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