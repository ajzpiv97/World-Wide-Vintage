import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Main from './src/views/Main';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Main/>
    </NavigationContainer>
  );
}
