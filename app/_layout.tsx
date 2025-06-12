// Adicione estas alterações ao seu layout.tsx
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

import BibliotecaScreen from '@/components/consulta';
import SearchTabs from '@/components/search';
import HomeScreen from '../components/home';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#590A0A" />
      <LinearGradient
        colors={['#590A0A', '#0D0D0D']}
        style={styles.background}
      >
        <Drawer.Navigator 
          initialRouteName="Home" 
          screenOptions={{
            drawerStyle: { 
              backgroundColor: '#590A0A',
              
            }, 
            drawerActiveTintColor: '#591C21',  
            drawerInactiveTintColor: '#777',
            drawerActiveBackgroundColor: '#D92525', 
            headerStyle: { 
              backgroundColor: '#590A0A',
              elevation: 0,
              shadowOpacity: 0,
            },  
            headerTintColor: '#F2766B',
            drawerLabelStyle: {
              fontSize: 16,
              fontWeight: 'bold',
            },
          }}
        >
          <Drawer.Screen 
            name="Home" 
            component={HomeScreen}   
            options={{ 
              drawerIcon: ({ size }) => (
                <Icon name="home-outline" size={size} color={'#BF9A78'} />
              ),
              title: 'Início',
            }} 
          />
          <Drawer.Screen 
            name="Pesquisar" 
            component={SearchTabs} 
            options={{ 
              drawerIcon: ({ size }) => (
                <Icon name="search-outline" size={size} color={'#BF9A78'} />
              ),
            }} 
          />
          <Drawer.Screen 
            name="Biblioteca" 
            component={BibliotecaScreen} 
            options={{ 
              drawerIcon: ({ size }) => (
                <Icon name="library-outline" size={size} color={'#BF9A78'} />
              ),
            }} 
          />
        </Drawer.Navigator>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
});
