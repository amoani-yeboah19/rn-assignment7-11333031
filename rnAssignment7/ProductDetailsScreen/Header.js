import React, { useRef, useState } from 'react';
import { View, TouchableOpacity, Image, Animated, Dimensions, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Sidebar from '../Components/Sidebar';

const screenWidth = Dimensions.get('window').width;

export default function Header() {
    const sidebarAnimation = useRef(new Animated.Value(-screenWidth)).current;
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const navigation = useNavigation();

    const toggleSidebar = () => {
        if (isSidebarVisible) {
            Animated.timing(sidebarAnimation, {
                toValue: -screenWidth,
                duration: 300,
                useNativeDriver: true,
            }).start(() => setSidebarVisible(false));
        } else {
            setSidebarVisible(true);
            Animated.timing(sidebarAnimation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };

    return (
        <View style={styles.headerContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={toggleSidebar}>
                    <Image style={styles.menu} source={require('../assets/Menu.png')} />
                </TouchableOpacity>
                <Image style={styles.logo} source={require('../assets/Logo.png')} />
                <View style={styles.iconsContainer}>
                    <Image style={styles.search} source={require('../assets/Search.png')} />
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cart')}>
                        <Image style={styles.shoppingBag} source={require('../assets/shoppingBag.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            {isSidebarVisible && <Sidebar toggleSidebar={toggleSidebar} sidebarAnimation={sidebarAnimation} />}
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        position: 'relative',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000, 
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 60,
        paddingBottom: 10,
        width: '100%',
        position: 'relative',
        backgroundColor: 'white',
    },
    menu: {
        width: 30,
        height: 33,
    },
    logo: {
        width: 99,
        height: 40,
        left: 21,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    search: {
        width: 30,
        height: 30,
        marginRight: 20,
    },
    shoppingBag: {
        width: 30,
        height: 30,
    },
    button: {
        position: 'relative',
    }
});
