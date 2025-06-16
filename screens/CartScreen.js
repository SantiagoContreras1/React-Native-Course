import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";

const { width, height } = Dimensions.get("window");

const CartScreen = ({ route }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const product = route.params?.product;

    if (product && !cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  }, [route.params?.product]);
    
    const placeOrder = () => { alert("Order placed successfully!"); };
  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={(item) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>${item.price}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>Your car is empty.</Text>}
      />
      <Button
        title="Place Order (COD)"
        onPress={placeOrder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width * 0.9,
    height: height * 0.1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  image: {
    width: width * 0.2,
    height: height * 0.1,
    height: 50,
    borderRadius: 10,
  },
});

export default CartScreen;
