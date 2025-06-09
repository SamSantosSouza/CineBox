import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import BibliotecaScreen from '@/components/consulta';
import SearchTabs from '@/components/search';
import HomeScreen from '../components/home';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{drawerStyle: { backgroundColor: '#191726'}, drawerActiveTintColor: '#591C21',  drawerInactiveTintColor: '#777',drawerActiveBackgroundColor: '#D92525', headerStyle: { backgroundColor: '#191726' } }}>
          <Drawer.Screen name="Home" component={HomeScreen}   options={{ drawerIcon: ({ focused, size, color }) => (
          <Icon name="home-outline" size={size} color={color} />),}} />
          <Drawer.Screen name="Pesquisar" component={SearchTabs} options={{ drawerIcon: ({ focused, size}) => (
          <Icon name="search-outline" size={size} color='' />),}} />
          <Drawer.Screen name="Biblioteca" component={BibliotecaScreen} options={{ drawerIcon: ({ focused, size, color }) => (
          <Icon name="library-outline" size={size} color={color} />),}} />
          
        </Drawer.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

