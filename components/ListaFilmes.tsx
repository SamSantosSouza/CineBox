import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

type Tarefa = {
  id: string;
  nome: string;
};

type Props = {
  lista: Tarefa[];
};

export default function ListaFilmes({ lista }: Props) {
  return (
    <FlatList
      data={lista}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text>{item.nome}</Text>
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
});
