import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'

const slide1 = require('../../assets/Img/slide1.jpg');
const slide2 = require('../../assets/Img/slide2.jpg');
const slide3 = require('../../assets/Img/slide3.jpg');

export default function HomeSlider() {
    const slideLIst = [
        {
            id:1,
            img:slide1
        },
        {
            id:2,
            img:slide2
        },
        {
            id:3,
            img:slide3
        },
    ]
    return (
        <View style={styles.container}>
            <ScrollView horizontal  style={styles.wrapper}>
            {slideLIst.map((i) =>(
                <Image source={i.img} style={{width:250, height:100, marginHorizontal:10, borderRadius:5}}/>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:10,
    },
    wrapper:{
        backgroundColor:'#dddddddd',
        paddingHorizontal:8,
        paddingVertical:10,
        height: 120,
    }
})
