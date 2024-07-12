import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import Header from "./Header";
import ProductInfo from "./ProductInfo";
import Footer from "./Footer";

export default function ProductDetails({navigation, route}){
    const {product} = route.params;
    
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <Header navigation={navigation}/>
                <ProductInfo route={route}/>
            </ScrollView>
            <Footer product={product} navigation={navigation}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFFFFF'
    },
    scroll:{
        flexGrow: 1
    }
})
