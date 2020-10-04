import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Root from './Root';

export default () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Root/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
