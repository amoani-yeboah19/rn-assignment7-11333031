import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function ProductInfo({ route }) {
    const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.productImage} />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{product.title.toUpperCase()}</Text>
        <Image style={styles.export} source={require('../assets/Export.png')} />
      </View>

      <View style={styles.productDetails}>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>

      <View style={styles.materials}>
        <Text style={styles.heading}>MATERIALS</Text>
        <Text style={styles.subtitle}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>
      </View>

      <View style={styles.instructionsContainer}>
        <View style={styles.instruction}>
          <Image style={styles.instructionIcon} source={require('../assets/Do Not Bleach.png')} />
          <Text style={styles.instructionText}>Do not use bleach</Text>
        </View>

        <View style={styles.instruction}>
          <Image style={styles.instructionIcon} source={require('../assets/Do Not Tumble Dry.png')} />
          <Text style={styles.instructionText}>Do not tumble dry</Text>
        </View>

        <View style={styles.instruction}>
          <Image style={styles.instructionIcon} source={require('../assets/Do Not Wash.png')} />
          <Text style={styles.instructionText}>Dry clean with tetrachloroethylene</Text>
        </View>

        <View style={styles.instruction}>
          <Image style={styles.instructionIcon} source={require('../assets/Iron Low Temperature.png')} />
          <Text style={styles.instructionText}>Iron at a maximum of 110°C/230°F</Text>
        </View>
      </View>

      <View style={styles.line}></View>

      <View style={styles.shippingContainer}>
        <Image style={styles.shippingIcon} source={require('../assets/Shipping.png')} />
        <Image style={styles.arrow} source={require('../assets/Up.png')} />
        <Text style={styles.shippingText}>Free Flat Rate Shipping</Text>
        <Text style={styles.estimatedDelivery}>Estimated to be delivered on</Text>
        <Text style={styles.date}>09/11/2021 - 12/11/2021.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  productImage: {
    width: 370,
    height: 460,
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
  },

  title: {
    fontSize: 24,
    letterSpacing: 3,
    fontWeight: '400',
    flex: 1,
  },

  export: {
    width: 24,
    height: 24,
  },

  productDetails: {
    marginHorizontal: 10,
  },

  description: {
    fontSize: 18,
    color: '#737373',
    marginTop: 4,
    fontWeight: '400',
  },

  price: {
    fontSize: 24,
    fontWeight: '400',
    color: '#D18035',
    marginTop: 8,
  },

  materials: {
    marginVertical: 20,
    marginHorizontal: 15,
  },

  heading: {
    fontSize: 20,
    letterSpacing: 3,
    fontWeight: '400',
  },

  subtitle: {
    fontSize: 18,
    marginTop: 10,
    color: '#737373',
  },

  instructionsContainer: {
    marginTop: 10,
    marginHorizontal: 15,
  },

  instruction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  instructionIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
    tintColor: '#737373',
  },

  instructionText: {
    fontSize: 16,
    color: '#737373',
  },

  line: {
    height: 1,
    backgroundColor: '#737373',
    marginVertical: 20,
    width: 310,
    left: 20,
    opacity: '0.3'
  },

  shippingIcon:{
    left: 20,
  },

  shippingText: {
    bottom: 52,
    left: 55,
    fontWeight: '400',
    fontSize: 16,
  },

  estimatedDelivery: {
    bottom: 44,
    fontSize: 16,
    left: 55,
    color: '#737373',
  },

  date:{
    bottom: 39,
    left: 55,
    color: '#737373',
    fontSize: 16,
  },

  arrow: {
    bottom: 28,
    left: 330,
    width: 28,
    height: 28
  }

});
