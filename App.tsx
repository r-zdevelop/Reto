/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView } from 'react-native';
import Header from './components/Header';


type SectionProps = PropsWithChildren<{
  title: string;
}>;


function App(): React.JSX.Element {

  useEffect(() => {
    console.log('App started!');

  }, []);

  return (
    <SafeAreaView>

      <Header />
    </SafeAreaView>
  );
}


export default App;
