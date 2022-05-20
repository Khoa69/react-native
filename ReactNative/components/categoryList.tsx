import React from 'react';
import { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
}from 'react-native'

export default function CategoryList(props : any){
    return (
    <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Image style={styles.categoryImage} source={require(`../assets/images/test1.png`) }/>
    </View>
    )
}
const styles= StyleSheet.create({
    categoryImage :{
        width:64,
        height:64
    },
    container:{
        alignItems: 'center',
        padding:16,
        shadowOffset:{width:0, height:0},
        backgroundColor:"#FFF",
        borderRadius:4,
        shadowColor:"#000",
        shadowOpacity:0.3,
        shadowRadius:10,
        marginBottom:16
    },
    title: {
        textTransform:'uppercase',
        fontWeight:'700',
        marginBottom:8
    }
})