// components/HomeTabs.tsx

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './home';         // Seu componente filmes
import News from './news'; // Tela comunidade (criar abaixo)

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Sem header no tab, o Drawer controla o header
        tabBarActiveTintColor: '#A66844',
        tabBarInactiveTintColor: '#555',
        tabBarStyle: { backgroundColor: '#BFBBB4' },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home-outline';

          if (route.name === 'Filmes') {
            iconName = focused ? 'film' : 'film-outline';
          } else if (route.name === 'Comunidade') {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Filmes" component={Home} />
      <Tab.Screen name="Comunidade" component={News} />
    </Tab.Navigator>
  );
}

