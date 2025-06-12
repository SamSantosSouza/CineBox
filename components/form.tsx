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

// Mantenha toda a lógica, apenas ajuste os styles
const styles = StyleSheet.create({
  input: {
    borderColor: '#F2766B',
    borderWidth: 1,
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    color: '#0D0D0D',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    placeholderTextColor: '#F2766B80',
    fontSize: 16,
    shadowColor: '#590A0A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  button: {
    backgroundColor: '#8C1414',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    height: 50,
    width: 200,
    alignSelf: 'center',
    marginTop: 10,
    shadowColor: '#590A0A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});