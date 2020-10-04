import 'react-native-gesture-handler';
import React from 'react';
import Screens from './src/views';
import { Provider } from 'react-redux';
import { store } from './src/store';

export default function App() {
  return (
    <Provider store={store}>
      <Screens/>
    </Provider>
  );
}
