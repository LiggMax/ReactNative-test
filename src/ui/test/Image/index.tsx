import React from 'react';
import {Text, StyleSheet, View, Image, Dimensions, ScrollView, SafeAreaView, StatusBar} from 'react-native';

export default function index() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.title}>
                <Text>推荐</Text>
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
            </View>

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
    title:{
        margin: 10,
    },
    itemImage: {
        // 设置圆角
        borderRadius: 15,
        width: Dimensions.get('window').width / 3, // 修改：宽度调整为屏幕宽度的一半
        height: Dimensions.get('window').height / 4,
        margin: 10,
    },
    margin: {
        // 设置外边距
        alignItems: 'center',
        marginBottom: 0,
    },
    horizontalContainer: {
        flexDirection: 'row', // 修改：设置横向布局
        justifyContent: 'space-between', // 修改：图片之间留有间距
    },
});