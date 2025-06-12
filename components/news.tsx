import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2; // margem de 16 * 2 + gap de 16

export default function News({ filmes }) {
  const ultimosFilmes = filmes.slice(0, 10);

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.titulo}>Lançamentos Recentes</Text>
      
      <View style={styles.grid}>
        {ultimosFilmes.length === 0 ? (
          <Text style={styles.vazio}>Nenhum filme adicionado ainda.</Text>
        ) : (
          ultimosFilmes.map((filme) => (
            <TouchableOpacity 
              key={filme.id} 
              style={styles.card}
              activeOpacity={0.7}
            >
              <View style={styles.posterContainer}>
                <Image
                  source={{
                    uri: 'https://via.placeholder.com/150x220.png?text=Poster',
                  }}
                  style={styles.poster}
                />
                <View style={styles.overlay}>
                  <Text style={styles.nomeOverlay} numberOfLines={1}>
                    {filme.nome}
                  </Text>
                </View>
              </View>
              
              <View style={styles.infoContainer}>
                <Text style={styles.ano}>{filme.ano}</Text>
                <Text numberOfLines={2} style={styles.descricao}>
                  {filme.descricao}
                </Text>
              </View>
            </TouchableOpacity>
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
    paddingBottom: 20,
    flexGrow: 1,
    backgroundColor: '#FFF',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: '#F2766B',
    textShadowColor: 'rgba(89, 10, 10, 0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
    letterSpacing: 0.5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: 'rgba(242, 198, 194, 0.3)',
    borderRadius: 12,
    width: CARD_WIDTH,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#590A0A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  posterContainer: {
    position: 'relative',
  },
  poster: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '30%',
    backgroundColor: 'rgba(89, 10, 10, 0.7)',
    justifyContent: 'flex-end',
    paddingBottom: 8,
    paddingHorizontal: 6,
  },
  nomeOverlay: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  infoContainer: {
    padding: 12,
  },
  ano: {
    fontSize: 12,
    color: '#8C1414',
    marginBottom: 8,
    fontWeight: '600',
  },
  descricao: {
    fontSize: 12,
    color: '#0D0D0D',
    lineHeight: 16,
  },
  vazio: {
    color: '#F2766B',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 40,
    width: '100%',
    fontStyle: 'italic',
  },
});