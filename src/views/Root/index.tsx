import React from 'react';
import Main from '../Main';
import Rocket from '../Rocket';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const config: any = {
  animation: 'timing',
  config: {
    duration: 2000
  },
};

const forFade = ({ current }: any) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

export default () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="rocket">
      <Stack.Screen
        name="rocket"
        component={Rocket}
      />
      <Stack.Screen
        name="main"
        component={Main}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
          cardStyleInterpolator: forFade
        }}
      />
    </Stack.Navigator>
  );
}
