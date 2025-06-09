

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './home';
import News from './news';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarActiveTintColor: '#A66844',
        tabBarInactiveTintColor: '#555',
        tabBarStyle: { backgroundColor: '#BFBBB4' },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home-outline';

          if (route.name === 'Filmes') {
            iconName = focused ? 'film' : 'film-outline';
          } else if (route.name === 'News') {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Filmes" component={Home} />
      <Tab.Screen name="News" component={News} />
    </Tab.Navigator>
  );
}

