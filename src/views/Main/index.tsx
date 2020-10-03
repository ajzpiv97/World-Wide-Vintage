import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CardCollection from '../CardCollection';
import Home from '../Home';

const Tab = createMaterialBottomTabNavigator();

export default () => (
  <Tab.Navigator
    initialRouteName="home"
    activeColor="#A2C4C9"
    barStyle={{ backgroundColor: 'gray' }}
  >
    <Tab.Screen
      name="home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="cardCollection"
      component={CardCollection}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="bell" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);
