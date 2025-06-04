import React, { useState } from 'react';
import {SafeAreaView,Text,TextInput,Button,StyleSheet,TouchableOpacity,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListaFilmes from './ListaFilmes';
import Search from '../components/search' 
import News from '../components/news'

type Filme = {
  id: string;
  nome: string;
};
function Input() {
  const [Filme, setFilme] = useState('');
  const [lista, setLista] = useState<Filme[]>([]);

  const adicionarFilme = () => {
    if (Filme.trim() === '') return;

    const novoFilme: Filme = {
      id: Date.now().toString(),
      nome: Filme,
    };

    setLista([...lista, novoFilme]);
    setFilme('');
  };

  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Catalógo de Filmes</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o filme"
        value={Filme}
        onChangeText={setFilme}
      />
      <TouchableOpacity onPress={adicionarFilme} style={styles.button}>
        <Text style={styles.text}>Adicionar</Text>
      </TouchableOpacity>
      <ListaFilmes lista={lista} />
    </SafeAreaView>
    
  );
}

const Tab = createBottomTabNavigator();

export default function Home() {
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
          } else if (route.name === 'Novidades') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          }
          

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Filmes" component={Input} />
      <Tab.Screen name="Novidades" component={News} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
  },

  button: {
    backgroundColor: '#A66844',
    color: '#F2F0F0',
    padding: 12,
    borderRadius: 8, 
    alignItems: 'center',
    height: 50,
    width: 200,
    alignSelf: 'center'
   
  },

  text:{
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  }, 

  item: {
    padding: 12,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  nome: {
    fontSize: 16,
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
});

