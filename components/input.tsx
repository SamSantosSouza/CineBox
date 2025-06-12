import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import ListaFilmes from './ListaFilmes';
import FormularioFilme from './form';

export default function Filmes({ filmes, onAdicionar }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Catálogo de Filmes</Text>
      <FormularioFilme onAdicionar={onAdicionar} />
      <ListaFilmes lista={filmes} />
    </SafeAreaView>
  );
}

// Apenas ajuste o estilo do título
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#FFFFFF'
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#F2766B',
    textShadowColor: 'rgba(89, 10, 10, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
    letterSpacing: 0.5,
  },
});

