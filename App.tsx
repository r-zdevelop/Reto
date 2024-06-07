/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { createContext } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './components/Header';
import ProductsScreen from './screens/ProductsScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export const AppContext = createContext({});

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const [product, setProduct] = React.useState(null);

  return (
    <NavigationContainer
      theme={MyTheme}
    >
      <AppContext.Provider value={{
        product,
        setProduct
      }}>
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
          <Stack.Screen name="ProductDetails" >
            {(props) => <ProductDetailScreen {...props} />}
          </Stack.Screen>
        </Stack.Navigator>
      </AppContext.Provider>
    </NavigationContainer >
  );
}


export default App;
