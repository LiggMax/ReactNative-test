import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import Swiper from 'react-native-swiper';

// 轮播图片数据
const swiperData = [
  {
    id: 1,
    image: require('../../../assets/image/02.png'),
    title: '图片 1',
    description: '这是第一张轮播图片',
  },
  {
    id: 2,
    image: require('../../../assets/image/02.png'),
    title: '图片 2', 
    description: '这是第二张轮播图片',
  },
  {
    id: 3,
    image: require('../../../assets/image/02.png'),
    title: '图片 3',
    description: '这是第三张轮播图片',
  },
];

export default class SwiperComponent extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>图片轮播展示</Text>
        
        {/* 主要轮播区域 */}
        <View style={styles.swiperContainer}>
          <Swiper
            style={styles.wrapper}
            showsButtons={true}
            autoplay={true}
            autoplayTimeout={3}
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}
            paginationStyle={styles.pagination}
            buttonWrapperStyle={styles.buttonWrapper}
            nextButton={<Text style={styles.buttonText}>›</Text>}
            prevButton={<Text style={styles.buttonText}>‹</Text>}
            loop={true}
            index={0}
          >
            {swiperData.map((item) => (
              <View key={item.id} style={styles.slide}>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="cover"
                />
                <View style={styles.textOverlay}>
                  <Text style={styles.slideTitle}>{item.title}</Text>
                  <Text style={styles.slideDescription}>{item.description}</Text>
                </View>
              </View>
            ))}
          </Swiper>
        </View>

        {/* 小型轮播展示 */}
        <Text style={styles.subtitle}>小型轮播示例</Text>
        <View style={styles.smallSwiperContainer}>
          <Swiper
            style={styles.smallWrapper}
            showsButtons={false}
            autoplay={true}
            autoplayTimeout={2}
            dot={<View style={styles.smallDot} />}
            activeDot={<View style={styles.smallActiveDot} />}
            paginationStyle={styles.smallPagination}
            loop={true}
          >
            {swiperData.map((item) => (
              <View key={`small-${item.id}`} style={styles.smallSlide}>
                <Image
                  source={item.image}
                  style={styles.smallImage}
                  resizeMode="cover"
                />
              </View>
            ))}
          </Swiper>
        </View>

        <Text style={styles.instruction}>
          💡 提示：主轮播每3秒自动切换，小轮播每2秒切换
        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:  20,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 15,
    color: '#555',
  },
  swiperContainer: {
    height: 250,
    marginHorizontal: 10,
  },
  wrapper: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  slide: {
    flex: 1,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 15,
  },
  slideTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  slideDescription: {
    fontSize: 14,
    color: 'white',
    opacity: 0.9,
  },
  // 指示器样式
  pagination: {
    bottom: 10,
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 12,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
  },
  // 按钮样式
  buttonWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  // 小型轮播样式
  smallSwiperContainer: {
    height: 120,
    marginHorizontal: 20,
  },
  smallWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  smallSlide: {
    flex: 1,
  },
  smallImage: {
    width: '100%',
    height: '100%',
  },
  smallPagination: {
    bottom: 5,
  },
  smallDot: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: 6,
    height: 6,
    borderRadius: 3,
    marginLeft: 2,
    marginRight: 2,
  },
  smallActiveDot: {
    backgroundColor: '#fff',
    width: 8,
    height: 6,
    borderRadius: 3,
    marginLeft: 2,
    marginRight: 2,
  },
  instruction: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    color: '#666',
    fontStyle: 'italic',
  },
});
