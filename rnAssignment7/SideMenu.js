import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function SideMenu({ navigation }) {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.closeDrawer()} style={{marginTop: 10}}>
            <Image source={require('./assets/Close.png')} style={{height:30, width:30}}/>
        </TouchableOpacity>
        <Image source={require('./assets/Title.png')} style={{marginTop: 15, marginBottom:15}}/>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.menuItem}>Store</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.menuItem}>Locations</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.menuItem}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.menuItem}>Jewelry</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.menuItem}>Electronics</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={styles.menuItem}>Clothing</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuItem: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
