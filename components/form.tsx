import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, StyleSheet, View } from 'react-native';

type Props = {
  onAdicionar: (filme: { nome: string; descricao: string; ano: string }) => void;
};

export default function FormularioFilme({ onAdicionar }: Props) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [ano, setAno] = useState('');

  const handleAdicionar = () => {
    if (nome.trim() === '' || descricao.trim() === '' || ano.trim() === '') return;

    onAdicionar({ nome, descricao, ano });
    setNome('');
    setDescricao('');
    setAno('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nome do filme"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano de lançamento"
        value={ano}
        onChangeText={setAno}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={handleAdicionar} style={styles.button}>
        <Text style={styles.text}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 12,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#A66844',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    height: 50,
    width: 200,
    alignSelf: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
