import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { RootSiblingParent } from 'react-native-root-siblings';
import Main from './src/views/Main';

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Main/>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
