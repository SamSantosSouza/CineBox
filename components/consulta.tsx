import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BibliotecaScreen = () => (
  <View style={styles.container}>
    <Text>Notifications Screen</Text>
  </View>
);

export default BibliotecaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

