import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from './HomeScreen/HomeScreen';
import CartScreen from './CartScreen/CartScreen';
import ProductDetails from './ProductDetailsScreen/ProductDetailsScreen';
import { CartProvider } from './Components/CartContext';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  <GestureHandlerRootView>
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
    </GestureHandlerRootView>
  );
}
