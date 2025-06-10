import React from 'react';
import {View, Text, ScrollView, StyleSheet, SafeAreaView} from 'react-native';

// 导入各种图标库
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

const VectorIconsDemo = () => {
  return (
    <ScrollView
      style={styles.scrollView}
      showsVerticalScrollIndicator={false}
      >
      <Text style={styles.title}>React Native Vector Icons 演示</Text>
      {/* Ionicons */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ionicons</Text>
        <View style={styles.iconRow}>
          <Icon name="home" size={30} color="#4F8EF7" />
          <Icon name="heart" size={30} color="#FF6B6B" />
          <Icon name="star" size={30} color="#FFD93D" />
          <Icon name="settings" size={30} color="#6BCF7F" />
          <Icon name="camera" size={30} color="#4ECDC4" />
        </View>
      </View>
      Material Icons
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Material Icons</Text>
        <View style={styles.iconRow}>
          <MaterialIcon name="favorite" size={30} color="#E91E63" />
          <MaterialIcon name="share" size={30} color="#2196F3" />
          <MaterialIcon name="search" size={30} color="#FF9800" />
          <MaterialIcon name="shopping-cart" size={30} color="#4CAF50" />
          <MaterialIcon name="account-circle" size={30} color="#9C27B0" />
        </View>
      </View>
      {/* FontAwesome */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>FontAwesome</Text>
        <View style={styles.iconRow}>
          <FontAwesome name="facebook" size={30} color="#3b5998" />
          <FontAwesome name="twitter" size={30} color="#1da1f2" />
          <FontAwesome name="instagram" size={30} color="#e4405f" />
          <FontAwesome name="linkedin" size={30} color="#0077b5" />
          <FontAwesome name="github" size={30} color="#333" />
        </View>
      </View>
      {/* AntDesign */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>AntDesign</Text>
        <View style={styles.iconRow}>
          <AntDesign name="like1" size={30} color="#1890ff" />
          <AntDesign name="dislike1" size={30} color="#ff4d4f" />
          <AntDesign name="message1" size={30} color="#52c41a" />
          <AntDesign name="pushpin" size={30} color="#fa8c16" />
          <AntDesign name="gift" size={30} color="#eb2f96" />
        </View>
      </View>
      {/* Entypo */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Entypo</Text>
        <View style={styles.iconRow}>
          <Entypo name="emoji-happy" size={30} color="#FFD93D" />
          <Entypo name="emoji-sad" size={30} color="#6B73FF" />
          <Entypo name="location-pin" size={30} color="#FF6B6B" />
          <Entypo name="mail" size={30} color="#4ECDC4" />
          <Entypo name="phone" size={30} color="#45B7D1" />
        </View>
      </View>
      {/* Feather */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Feather</Text>
        <View style={styles.iconRow}>
          <Feather name="edit" size={30} color="#6C7B7F" />
          <Feather name="trash-2" size={30} color="#FF6B6B" />
          <Feather name="download" size={30} color="#4CAF50" />
          <Feather name="upload" size={30} color="#2196F3" />
          <Feather name="bell" size={30} color="#FF9800" />
        </View>
      </View>
      {/* 大尺寸图标演示 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>大尺寸图标</Text>
        <View style={styles.largeIconRow}>
          <Icon name="rocket" size={60} color="#9B59B6" />
          <MaterialIcon name="favorite" size={60} color="#E91E63" />
          <FontAwesome name="star" size={60} color="#F39C12" />
        </View>
      </View>
      {/* 带背景的图标 */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>带背景的图标</Text>
        <View style={styles.iconRow}>
          <View style={[styles.iconBackground, {backgroundColor: '#4F8EF7'}]}>
            <Icon name="home" size={24} color="white" />
          </View>
          <View style={[styles.iconBackground, {backgroundColor: '#FF6B6B'}]}>
            <MaterialIcon name="favorite" size={24} color="white" />
          </View>
          <View style={[styles.iconBackground, {backgroundColor: '#4CAF50'}]}>
            <FontAwesome name="star" size={24} color="white" />
          </View>
          <View style={[styles.iconBackground, {backgroundColor: '#FF9800'}]}>
            <AntDesign name="like1" size={24} color="white" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    margin: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  section: {
    marginBottom: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  largeIconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconBackground: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VectorIconsDemo;
