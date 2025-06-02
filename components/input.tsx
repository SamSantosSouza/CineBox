import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

import ListaFilmes from './ListaFilmes';

type Tarefa = {
  id: string;
  nome: string;
};

export default function Input() {
  const [Filme, setFilme] = useState('');
  const [lista, setLista] = useState<Tarefa[]>([]);

  const adicionarFilme = () => {
    if (Filme.trim() === '') return;

    const novoFilme: filme = {
      id: Date.now().toString(),
      nome: Filme,
    };

    setLista([...lista, novoFilme]);
    setFilme('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Catalógo de Filmes</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o filme"
        value={Filme}
        onChangeText={setFilme}
      />

      <Button title="Adicionar" onPress={adicionarFilme} />

      <ListaFilmes lista={lista} />
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
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
  },
});
