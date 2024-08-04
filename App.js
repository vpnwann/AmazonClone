import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HiddenStack from './android/Screens/Hidden';
import Test from './android/Screens/Test';
import { CartProvider } from './android/CartContext';
import Toast from 'react-native-toast-message';
import { Image } from 'react-native';

// Define URLs for your icons
const iconUrls = {
  home: 'https://cdn1.iconfinder.com/data/icons/unicons-line-vol-4/24/home-alt-128.png',
  cart: 'https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_cart2-128.png',
};

const Tab = createBottomTabNavigator();

function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconUrl;

              if (route.name === 'Home') {
                iconUrl = iconUrls.home; // URL for home icon
              } else if (route.name === 'CART') {
                iconUrl = iconUrls.cart; // URL for cart icon
              }

              return (
                <Image
                  source={{ uri: iconUrl }}
                  style={{ width: size, height: size, tintColor: color }}
                />
              );
            },
            tabBarActiveTintColor: '#ff6347',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              backgroundColor: 'black',
              paddingBottom: 5,
              height: 60,
              borderTopWidth: 1,
              borderTopColor: '#ddd',
            },
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '600',
            },
          })}
        >
          <Tab.Screen options={{ headerShown: false }} name="Home" component={HiddenStack} />
          <Tab.Screen options={{ headerShown: false }} name="CART" component={Test} />
        </Tab.Navigator>
      </NavigationContainer>
      <Toast ref={(ref) => Toast.setRef(ref)} /> 
    </CartProvider>
  );
}

export default App;
