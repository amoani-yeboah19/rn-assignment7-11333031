import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProductDetail({ route, navigation }) {
    const { item } = route.params;

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

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={require('./assets/Menu.png')} style={{ height: 32, width: 32 }} />
                </TouchableOpacity>
                <Image source={require('./assets/Logo.png')} style={{ width: 100, height: 40 }} />
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                        <Image source={require('./assets/shoppingBag.png')} style={{ height: 30, width: 30, marginRight: 20 }} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image source={require('./assets/Backward.png')} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: item.image }} style={styles.productImage} />
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.titleRow}>
                        <Text style={styles.productTitle}>{item.title}</Text>
                        <TouchableOpacity>
                            <Image source={require('./assets/Export.png')} style={styles.exportIcon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.productDescription}>{item.description}</Text>
                    <Text style={styles.productPrice}>${item.price}</Text>
                </View>

                <View style={styles.materialsContainer}>
                    <Text style={styles.sectionTitle}>MATERIALS</Text>
                    <Text style={styles.sectionText}>
                        We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.
                    </Text>
                </View>

                <View style={styles.careContainer}>
                    <View style={styles.careRow}>
                        <Image source={require('./assets/Do Not Bleach.png')} />
                        <Text style={styles.careText}>Do not use bleach</Text>
                    </View>
                    <View style={styles.careRow}>
                        <Image source={require('./assets/Do Not Tumble Dry.png')} />
                        <Text style={styles.careText}>Do not tumble dry</Text>
                    </View>
                    <View style={styles.careRow}>
                        <Image source={require('./assets/Do Not Wash.png')} />
                        <Text style={styles.careText}>Dry clean with tetrachloroethylene</Text>
                    </View>
                    <View style={styles.careRow}>
                        <Image source={require('./assets/Iron Low Temperature.png')} />
                        <Text style={styles.careText}>Iron at a maximum of 110ºC/230ºF</Text>
                    </View>
                </View>

                <View style={styles.shippingContainer}>
                    <View style={{
                        flex: 1,
                        height: 2,
                        width: '75%',
                        backgroundColor: '#AFB0B6',
                        marginBottom: 25,
                    }} />
                    <View style={styles.shippingRow}>
                        <Image source={require('./assets/Shipping.png')} />
                        <Text style={styles.shippingTextBold}>Free Flat Rate Shipping</Text>
                        <TouchableOpacity style={{ marginLeft: '25%' }}>
                            <Image source={require('./assets/Up.png')} style={styles.upIcon} />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.shippingText}>Estimated to be delivered on</Text>
                    <Text style={styles.shippingText}>09/11/2021 - 12/11/2021.</Text>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <View style={[styles.secRow, { marginTop: 20 }]}>
                    <TouchableOpacity style={styles.secRow}  onPress={() => addToCart(item)}>
                        <Image source={require('./assets/Plus.png')} style={{ tintColor: '#fff', marginRight: 20, marginLeft: 20 }} />
                        <Text style={{ color: '#fff', fontSize: 15, alignSelf: 'center' }}>ADD TO BASKET</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: '40%' }}>
                        <Image source={require('./assets/Heart.png')} style={{ tintColor: '#fff' }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70,
        paddingLeft: 25,
        paddingRight: 25,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    productImage: {
        height: 400,
        width: '100%',
        resizeMode: 'contain',
    },
    infoContainer: {
        marginBottom: 25,
    },
    titleRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    productTitle: {
        fontWeight: '600',
        fontSize: 20,
        flexShrink: 1,
        maxWidth: '85%'
    },
    exportIcon: {
        height: 18,
        width: 18,
        marginLeft: 10
    },
    productDescription: {
        fontSize: 15,
        marginBottom: 5,
    },
    productPrice: {
        color: '#dd8560',
        fontWeight: 'bold',
        fontSize: 20,
    },
    materialsContainer: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 10,
    },
    sectionText: {
        fontSize: 15,
    },
    careContainer: {
        marginBottom: 25,
    },
    careRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    careText: {
        marginLeft: 10,
        fontSize: 15,
    },
    shippingContainer: {
        marginBottom: 25,
    },
    separator: {
        height: 2,
        backgroundColor: '#AFB0B6',
        marginBottom: 25,
        width: '63%',
        alignSelf: 'center',
    },
    shippingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    shippingTextBold: {
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 15,
    },
    shippingText: {
        fontSize: 15,
        marginLeft: 35,
    },
    footer: {
        backgroundColor: '#000',
        height: 70,
        marginLeft: -25,
        marginRight: -40,
    },
    secRow: {
        flexDirection: 'row',
        marginBottom: 24,
    },
});
