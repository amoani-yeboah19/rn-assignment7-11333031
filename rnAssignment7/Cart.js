import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Cart = ({ navigation }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const cart = await AsyncStorage.getItem('cart');
                if (cart) {
                    setCartItems(JSON.parse(cart));
                }
            } catch (error) {
                console.log('Error fetching cart items:', error);
            }
        };
        const unsubscribe = navigation.addListener('focus', () => {
            fetchCartItems();
        });
    
        return unsubscribe;
    }, [navigation]);

    const removeFromCart = async (removeItem) => {
        try {
            const updatedCart = cartItems.filter(item => item.id !== removeItem.id);
            setCartItems(updatedCart);
            await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
        } catch (error) {
            console.log('Error removing item from cart:', error);
        }
    };

    const renderCartItem = ({ item }) => {
        const navigateToProduct = () => {
            navigation.navigate('ProductDetail', { item });
        };

        return (
            <View style={styles.imageRow}>
                <Image source={{ uri: item.image }} style={{ height: 120, width: 100, marginRight: 20 }} />
                <TouchableOpacity onPress={navigateToProduct}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 15, fontWeight: 'bold' }} numberOfLines={1}>{item.title}</Text>
                        <Text style={{ fontSize: 13 }} numberOfLines={1}>{item.description}</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#dd8560' }}>${item.price}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeFromCart(item)} style={styles.remove}>
                    <Image source={require('./assets/remove.png')} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>
            </View>
        );
    };

    const calculateTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price;
        });
        return total.toFixed(2);
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require('./assets/Backward.png')} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
                <View style={{ marginLeft: '30%' }}>
                    <Image source={require('./assets/Logo.png')} style={{ marginLeft: 20, width: 100, height: 40, alignSelf: 'center' }} />
                </View>
                <View style={{ marginLeft: '30%' }}>
                    <TouchableOpacity>
                        <Image source={require('./assets/Search.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <Image source={require('./assets/checkout.png')} style={{ alignSelf: 'center', height: 42, width: 200, marginTop: 10 }} />

            <FlatList
                data={cartItems}
                renderItem={renderCartItem}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />

            <View style={{ marginTop: 20 }}>
                <View style={styles.row}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>EST. TOTAL</Text>
                    <Text style={{ marginLeft: '55%', color: '#dd8560', fontWeight: 'bold', fontSize: 24 }}>${calculateTotal()}</Text>
                </View>

                <View style={styles.footer}>
                    <TouchableOpacity style={[styles.row, { marginTop: 20 }]}>
                        <Image source={require('./assets/shoppingBag.png')} style={{ tintColor: '#fff', marginRight: 20 }} />
                        <Text style={{ color: '#fff', fontSize: 22, alignSelf: 'center' }}>CHECKOUT</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70,
        marginLeft: 25,
        marginRight: 25,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginBottom: 24,
    },
    footer: {
        backgroundColor: '#000',
        height: 70,
        marginLeft: -25,
        marginRight: -40
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    remove: {
        position: 'absolute',
        right: 0,
        bottom: 0
    },
});

export default Cart;
