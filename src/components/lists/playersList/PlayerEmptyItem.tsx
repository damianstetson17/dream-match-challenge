import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PlayerEmptyItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aún no se han cargado jugadores</Text>
      <Text style={styles.subtitle}>
        Cárgalos tocando en{' '}
        <Text style={styles.boldAdvice}>Agregar Jugador</Text>
      </Text>
    </View>
  );
};

export default PlayerEmptyItem;

const styles = StyleSheet.create({
  container: {flex: 1, marginVertical: 40},
  title: {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: 'gray',
    textAlign: 'center',
    fontFamily: 'comfortaBold',
  },
  boldAdvice: {
    fontSize: 14,
    color: 'gray',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
