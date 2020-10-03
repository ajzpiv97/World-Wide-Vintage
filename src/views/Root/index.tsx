import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../Main';
import Rocket from '../Rocket';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName="rocket">
      <Stack.Screen name="rocket" component={Rocket} />
      <Stack.Screen name="main" component={Main} />
    </Stack.Navigator>
  );
}
