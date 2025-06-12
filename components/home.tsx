import React, { useState, useRef, useEffect } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Filmes from './input';
import News from './news';

const Tab = createBottomTabNavigator();

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [novoFilmeAdicionado, setNovoFilmeAdicionado] = useState(false);

  const pulseAnim = useRef(new Animated.Value(1)).current;

  const adicionarFilme = ({ nome, descricao, ano }) => {
    const novoFilme = {
      id: Date.now().toString(),
      nome,
      descricao,
      ano,
    };
    setFilmes([novoFilme, ...filmes]);
    setNovoFilmeAdicionado(true);
  };

  useEffect(() => {
    if (novoFilmeAdicionado) {
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.4,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start(() => {
        setNovoFilmeAdicionado(false); // reset
      });
    }
  }, [novoFilmeAdicionado]);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#A66844',
        tabBarInactiveTintColor: '#555',
        tabBarStyle: { backgroundColor: '#590A0A' },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'home-outline';

          if (route.name === 'Filmes') {
            iconName = focused ? 'film' : 'film-outline';
            return <Icon name={iconName} size={size} color='#D9414E' />;
          } else if (route.name === 'Novidades') {
            iconName = focused ? 'notifications' : 'notifications-outline';
            return (
              <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
                <Icon name={iconName} size={size} color='#D9414E' />
              </Animated.View>
            );
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Filmes">
        {() => <Filmes filmes={filmes} onAdicionar={adicionarFilme} />}
      </Tab.Screen>
      <Tab.Screen name="Novidades">
        {() => <News filmes={filmes} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
