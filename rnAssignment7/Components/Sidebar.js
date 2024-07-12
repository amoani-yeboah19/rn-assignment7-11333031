import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export default function Sidebar({toggleSidebar, sidebarAnimation}) {
    const navigation = useNavigation();

    const navigateToHomeScreen = () => {
        toggleSidebar();
        navigation.navigate('Home');
    }

    return (
        <Animated.View style={[styles.sidebar, {transform: [{translateX: sidebarAnimation}]}]}>
            <TouchableOpacity style={styles.hideSidebar} onPress={toggleSidebar}>
                <Image style={styles.close} source={require('../assets/Close.png')} />
            </TouchableOpacity>
            <View style={styles.sidebarContainer}>
                <Text style={styles.heading}>EWURAFUA QUANSAH</Text>
                <View style={styles.line}></View>
                <TouchableOpacity onPress={navigateToHomeScreen}>
                    <Text style={styles.options}>Store</Text>
                </TouchableOpacity>
                <Text style={styles.options}>Locations</Text>
                <Text style={styles.options}>Blog</Text>
                <Text style={styles.options}>Jewelry</Text>
                <Text style={styles.options}>Electronic</Text>
                <Text style={styles.options}>Clothing</Text>
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    sidebar: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: screenWidth * 0.6,
        height: screenHeight,
        backgroundColor: '#FFFFFF',
        padding: 20,
        zIndex: 1000,
    },
    hideSidebar: {
        position: 'absolute',
        top: 50,
        left: 20,
    },
    close: {
        width: 35,
        height: 35,
    },
    sidebarContainer: {
        marginTop: 80,
    },
    heading: {
        fontSize: 24,
        top: 12,
        fontWeight: '300',
        letterSpacing: 2,
    },
    line: {
        height: 2,
        backgroundColor: '#D18035',
        top: 15,
        marginVertical: 10,
        width: 100,
        left: 10,
    },
    options: {
        fontSize: 24,
        marginVertical: 20,
        top: 20,
        fontWeight: '300',
    },
});
