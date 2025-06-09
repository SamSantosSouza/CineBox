import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

type Filme = {
  id: string;
  nome: string;
  descricao: string;
  ano: string;
};

type Props = {
  lista: Filme[];
};

export default function ListaFilmes({ lista }: Props) {
  if (lista.length === 0) {
    return <Text style={styles.empty}>Nenhum filme adicionado ainda.</Text>;
  }

  return (
    <FlatList
      data={lista}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.descricao}>Sinopse: {item.descricao}</Text>
          <Text style={styles.ano}>Ano de lançamento: {item.ano}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 14,
    color: '#444',
  },
  ano: {
    fontSize: 14,
    color: '#666',
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    color: '#555',
  },
});
