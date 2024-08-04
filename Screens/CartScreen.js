import React, { useContext } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import CartContext from './CartContext';

const CartScreen = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  return (
    <View>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => removeFromCart(item.id)} />
          </View>
        )}
      />
      <Button title="Clear Cart" onPress={clearCart} />
    </View>
  );
};

export default CartScreen;
