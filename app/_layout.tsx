import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// Importa o componente principal
import Input from '../components/input';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Input/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
