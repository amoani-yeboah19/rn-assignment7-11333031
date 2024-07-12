import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

export default function Home({ navigation }) {
    const [products, setProducts] = useState([]);

    const addToCart = async (item) => {
        try {
            const cartItems = await AsyncStorage.getItem('cart');
            let cart = cartItems ? JSON.parse(cartItems) : [];
            cart.push(item);
            await AsyncStorage.setItem('cart', JSON.stringify(cart));
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchProducts();
    }, []);

    const Store = ({ item }) => {
        const navigateToProduct = () => {
            navigation.navigate('ProductDetail', { item });
        };

        return (
            <View style={styles.column}>
                <Image source={{ uri: item.image }} style={styles.productImage} />
                <TouchableOpacity style={styles.addIcon} onPress={() => addToCart(item)}>
                    <Image source={require('./assets/add_circle.png')} style={{ height: 25, width: 25 }} />
                </TouchableOpacity>
                <View style={styles.infoCol}>
                    <TouchableOpacity onPress={navigateToProduct}>
                        <Text style={styles.productTitle} numberOfLines={1}>{item.title}</Text>
                        <Text style={styles.productDescription} numberOfLines={1}>{item.description}</Text>
                        <Text style={styles.productPrice}>${item.price}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={require('./assets/Menu.png')} style={{ height: 32, width: 32 }} />
                </TouchableOpacity>
                <Image source={require('./assets/Logo.png')} style={{ marginLeft: 20, width: 100, height: 40 }} />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Image source={require('./assets/Search.png')} style={{ height: 30, width: 30, marginRight: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Image source={require('./assets/shoppingBag.png')} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={[styles.row, { marginTop: 10 }]}>
                    <Image source={require('./assets/header.png')} style={{ marginTop: 10 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.iconCircle}>
                            <Image source={require('./assets/Listview.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.iconCircle, { marginLeft: 10 }]}>
                            <Image source={require('./assets/Filter.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    data={products}
                    numColumns={2}
                    renderItem={({ item }) => <Store item={item} />}
                    keyExtractor={item => item.id.toString()}
                />
            </ScrollView>
        </View>
    );
}

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
        marginBottom: 24,
    },
    column: {
        flex: 1,
        margin: 5,
    },
    iconCircle: {
        height: 45,
        width: 45,
        borderRadius: 30,
        backgroundColor: '#ececec',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productImage: {
        height: 220,
        width: '100%',
    },
    addIcon: {
        position: 'absolute',
        top: 190,
        left: 135,
    },
    infoCol: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    productTitle: {
        fontWeight: '600',
    },
    productDescription: {
        fontSize: 12,
    },
    productPrice: {
        color: '#dd8560',
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 3,
    },
});
