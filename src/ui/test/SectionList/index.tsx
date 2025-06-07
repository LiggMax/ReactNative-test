import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from 'react-native';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const SectionListDemo = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      //隐藏滚动条
      showsVerticalScrollIndicator={false}
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({item}) => (
        <View style={styles.item}>
          <Text style={styles.title}>{item}</Text>
        </View>
      )}
      renderSectionHeader={({section: {title}}) => (
        <Text style={styles.header}>{title}</Text>
      )}
      ItemSeparatorComponent={() => (
        <View style={{borderBottomWidth: 2, borderBottomColor: '#00ffcd'}} />
      )}
      //  没有数据时显示
      ListEmptyComponent={() => (
        <Text>没有数据</Text>
      )}
      //下拉刷新
      refreshing={false}
      onRefresh={() => {
        console.log('下拉刷新');
      }}
      ListHeaderComponent={() => (
        <Text style={{fontSize:30,fontWeight:'bold'}}>
          头部
        </Text>
      )}
      ListFooterComponent={() => (
        <Text style={{fontSize:30,fontWeight:'bold'}}>
          底部
        </Text>
      )}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
    marginHorizontal: 16,
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  title: {
    fontSize: 24,
  },
  separator: {
    height: 1,
  },
});

export default SectionListDemo;
