import React from 'react';
import {Text, StyleSheet, View, Animated, SafeAreaView, StatusBar} from 'react-native';
import ScrollView = Animated.ScrollView;

export default function index() {
  return (
    <View>
      <StatusBar
        translucent={false}
      />
      <SafeAreaView>
        <ScrollView
          style={{backgroundColor: '#dfb',}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Text style={[styles.nav]}>iPad</Text>
          <Text style={[styles.nav]}>Phone</Text>
          <Text style={[styles.nav]}>Android</Text>
          <Text style={[styles.nav]}>ios</Text>
          <Text style={[styles.nav]}>ios</Text>
          <Text style={[styles.nav]}>ios</Text>
          <Text style={[styles.nav]}>ios</Text>
        </ScrollView>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{margin: 20}}
        pagingEnabled={true}>
        <Text style={[styles.text]}>
          大陆的中央有个大国，在那个国家的后宫之中有一位少女，其名为“猫猫”。她以前在花街做药师，
          现在在后宫做事。某天，她得知皇子们皆早夭，而现在的两个皇子都因为生病而逐渐衰弱。于是，
          在好奇心的驱使下，她开始调查事情的真相，就好像在说世上不可能存在诅咒。壬氏是一位外表俊美的宦官
          他让猫猫当皇帝宠妃的试毒人。猫猫对人没有兴趣，却异常钟情毒和药，就是这样一位在花街长大的药师，
          被卷入了宫中的传闻事件。美丽的玫瑰长有刺，女人的庭院里到处都是毒，流言和阴谋更是不缺。
          虽然不断地被壬氏委托麻烦事，但猫猫还是照常处理。罕见的嗜毒姑娘今天也在后宫里奔走！
        </Text>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    margin:10,
    fontWeight: 'bold',
    color: '#6dfb00',
  },
  nav:{
    fontSize:30,
    margin:10
  }
});
