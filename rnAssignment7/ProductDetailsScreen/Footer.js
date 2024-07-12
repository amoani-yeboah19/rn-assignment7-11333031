import { StyleSheet, Text, Image} from "react-native";
import { useCart } from "../Components/CartContext";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Footer({product}){
    const {dispatch} = useCart();

    const addToCart = () => {
        if (product && product.id) {
            dispatch({ type: 'ADD_TO_CART', payload: product });
        }
    };
    
    
    return(
            <TouchableOpacity onPress={addToCart}style={styles.footer}>
                <Image style={styles.plus} source={require('../assets/Plus.png')}></Image>
                <Text style={styles.buttonText}>ADD TO BASKET</Text>
                <Image style={styles.wishlist} source={require('../assets/Heart.png')}></Image>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#000000',
        height: 90,
        bottom: 4,
        borderTopWidth: 1,
        borderColor: '#333333',
    },

    plus: {
        tintColor: '#FFFFFF',
        right: 90,
        width: 30,
        height: 40,
    },

    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: '300',
        right: 70
    },

    wishlist: {
        tintColor: '#FFFFFF',
        left: 70,
        width: 30,
        height: 30,
        
    },
});
