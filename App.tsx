/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import ProductsScreen from './components/ProductsScreen';
import ProductDetailScreen from './components/ProductDetailScreen';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function App(): React.JSX.Element {

  useEffect(() => {
    console.log('App started! 22s');

  }, []);

  return (
    <NavigationContainer>
      <Header />
      <Stack.Navigator
        initialRouteName='Products'
        screenOptions={{
          headerTitle: '',
        }}
      >
        <Stack.Screen name="Products" >
          {(props) => <ProductsScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}


export default App;
