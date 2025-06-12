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
          <Text style={styles.descricao}>{item.descricao}</Text>
          <Text style={styles.ano}>Ano de lançamento: {item.ano}</Text>
        </View>
      )}
    />
  );
}
// Ajuste os estilos para ficar como cards
const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    marginBottom: 12,
    shadowColor: '#590A0A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#F2766B',
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F2766B',
    marginBottom: 6,
  },
  descricao: {
    fontSize: 14,
    color: '#0D0D0D',
    marginBottom: 8,
    lineHeight: 20,
  },
  ano: {
    fontSize: 14,
    color: '#8C1414',
    fontStyle: 'italic',
  },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    color: '#F2766B',
    fontSize: 16,
  },
});