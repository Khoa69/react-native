import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Alert,
    TouchableOpacity
}from 'react-native'
import { data } from '../datadumb/data';

export default function CategoryList(props : any){
    const i = props.index;
    const onPress = props.onPress;

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <Text style={styles.title}>{data.form[i].title}</Text>
                <Image style={styles.categoryImage} source={data.form[i].image }/>
            </View>
        </TouchableOpacity>
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