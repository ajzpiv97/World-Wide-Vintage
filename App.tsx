import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from './src/store';
import React from 'react';
import Screens from './src/views';

export default function App() {
  return (
    <Provider store={store}>
      <Screens/>
    </Provider>
  );
}
