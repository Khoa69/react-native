import { NativeStackScreenProps } from '@react-navigation/native-stack';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CategoryList from '../../components/categoryList';
import { data } from '../../datadumb/data';
import {RootStackParamList} from '../../types'

type Props = NativeStackScreenProps<RootStackParamList, 'Home', 'Detail'>;

export default function Categories({ navigation } : Props ) {
  // const [category,setCategory]= useState<any>([]);
  // useEffect(()=>{
  //   axios.get('http://localhost:3000/categories')
  //     .then(res=>{
  //       setCategory(res.data);
  //     })
  //     .catch(err=>{
  //       console.error(err);
  //     })
  // },[])
    return (
      <View >
        <ScrollView style={styles.scrollv}>
          {
            data.form.map((a : any,i: number) =><CategoryList index={i} onPress={()=> navigation.navigate('Detail',{
              title : a.title,
              image: a.image
            })}/>)
          }
        </ScrollView>  
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft:16,
    paddingRight:16
  },
  scrollv:{
    paddingLeft:16,
    paddingRight:16,
    backgroundColor: 'grey',
  }
});
