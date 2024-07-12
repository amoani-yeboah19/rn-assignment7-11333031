import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { useCart } from "../Components/CartContext";
import { useNavigation } from "@react-navigation/native";

const CartList = ({ item }) => {
    const navigation = useNavigation();
    const { dispatch } = useCart();

    const removeFromCart = () => {
        if (item && item.id) {
            dispatch({ type: 'REMOVE_FROM_CART', payload: item.id });
        }
    };

    const navigateToDetail = () => {
        navigation.navigate('ProductDetails', { product: item });
    };

    const truncatedDescription = item.description.length > 50
        ? item.description.substring(0, 47) + "..."
        : item.description;
        
    return (
        <TouchableOpacity onPress={navigateToDetail} style={styles.cartList}>
            <Image source={{ uri: item.image.uri }} style={styles.productImage} />
            <View style={styles.productDetails}>
                <Text style={styles.title}>{item.title.toUpperCase()}</Text>
                <Text style={styles.description} numberOfLines={1}>{truncatedDescription}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.removeButton} onPress={removeFromCart}>
                    <Image source={require('../assets/remove.png')} style={styles.removeImage} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

export default function Checkout() {
    const { cart } = useCart();
    
    return (
        <View style={styles.container}>
            {cart.length > 0 ? (
                cart.map(item => {
                    if (item && item.id) {
                        return <CartList key={item.id} item={item}></CartList>;
                    }
                    return null;
                })
            ) : (
                <Text style={styles.emptyCartText}>There are no products in your cart.</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FFFFFF',
        top: 70
    },

    cartList: {
        flexDirection: 'row',
        padding: 13,
        alignItems: 'center',
        position: 'relative',
        bottom: 50,
    },

    productImage: {
        width: 90,
        height: 120,
        marginRight: 11,
    },

    productDetails: {
        flex: 1,
        left: 10
    },

    title: {
        fontSize: 15,
        letterSpacing: 4,
        fontWeight: '400'
    },

    description: {
        fontSize: 15,
        fontWeight: '400',
        color: '#737373',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },

    price: {
        fontSize: 15,
        color: '#D18035'
    },

    removeButton: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        right: 30,
    },

    removeImage: {
        width: 20,
        height: 20,
    },

    emptyCartText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
        color: '#737373',
        top: 140
    },
});
