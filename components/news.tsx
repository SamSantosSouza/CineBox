import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2; // margem de 16 * 2 + gap de 16

export default function News({ filmes }) {
  const ultimosFilmes = filmes.slice(0, 10);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Lançamentos Recentes</Text>
      <View style={styles.grid}>
        {ultimosFilmes.length === 0 ? (
          <Text style={styles.vazio}>Nenhum filme adicionado ainda.</Text>
        ) : (
          ultimosFilmes.map((filme) => (
            <View key={filme.id} style={styles.card}>
              <Image
                source={{
                  uri: 'https://via.placeholder.com/150x220.png?text=Poster',
                }}
                style={styles.poster}
              />
              <Text style={styles.nome}>{filme.nome}</Text>
              <Text style={styles.ano}>{filme.ano}</Text>
              <Text numberOfLines={2} style={styles.descricao}>
                {filme.descricao}
              </Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
    flexGrow: 1,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#A66641',
    borderRadius: 10,
    width: CARD_WIDTH,
    marginBottom: 16,
    padding: 8,
  },
  poster: {
    width: '100%',
    height: 160,
    borderRadius: 6,
    marginBottom: 8,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  ano: {
    fontSize: 12,
    color: '#bbb',
    marginBottom: 4,
  },
  descricao: {
    fontSize: 13,
    color: '#aaa',
  },
  vazio: {
    color: '#888',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
    width: '100%',
  },
});
