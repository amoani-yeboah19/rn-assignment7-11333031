import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import Home from './Home';
import Cart from './Cart';
import ProductDetail from './ProductDetail';
import SideMenu from './SideMenu';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
        <Drawer.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Drawer.Screen name="Cart" component={Cart} options={{headerShown:false}}/>
        <Drawer.Screen name="ProductDetail" component={ProductDetail} options={{headerShown:false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}