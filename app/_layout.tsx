import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';



import HomeScreen from '../components/home';
import BibliotecaScreen from '@/components/consulta';
import SearchTabs from '@/components/search';

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{drawerStyle: { backgroundColor: '#BFBBB4'} }}>
          <Drawer.Screen name="Home" component={HomeScreen}   options={{ drawerIcon: ({ focused, size, color }) => (
          <Icon name="home-outline" size={size} color={color} />),}} />
          <Drawer.Screen name="Pesquisar" component={SearchTabs} options={{ drawerIcon: ({ focused, size, color }) => (
          <Icon name="search-outline" size={size} color={color} />),}} />
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

