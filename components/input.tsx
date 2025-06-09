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
});
