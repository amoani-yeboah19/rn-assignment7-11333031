import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useCart } from "../Components/CartContext";
import Header from "./Header";
import Footer from "./Footer";
import Checkout from "./Checkout";

export default function CartScreen({navigation}){
    const { cart } = useCart();
    const product = cart.length > 0 ? cart[0] : null;
    return(
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scroll}>
            <Header navigation={navigation}/>
            <Checkout/>
            </ScrollView>
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#FFFFFF'
    },

    scroll: {
        flexGrow: 1,
        paddingBottom: 80
    }
})