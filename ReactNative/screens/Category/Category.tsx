import { RouteProp, useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { ParamDetailList } from "../../Interface/type";
import { RootStackParamList } from "../../types";
import { product } from '../../datadumb/data';


type Props = NativeStackScreenProps<RootStackParamList>;


export default function Category( ){
    const route = useRoute<RouteProp<ParamDetailList, 'Detail'>>();
    const title = route.params.title;
    const image = route.params.image;
    return(
        <FlatList<any>
        data={product}
        numColumns={2}
        renderItem={(item)=>(
                <View style={styles.wrapper}>
                    <View style={styles.container}>
                        <Text style={styles.title}>{title}</Text>
                        <Image style={styles.categoryImage} source={image}/>
                    </View>
                </View>
        )}
        />
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
    },
    wrapper: {
        flex:1,
        paddingHorizontal:8,
        paddingTop:16
    }
})
  