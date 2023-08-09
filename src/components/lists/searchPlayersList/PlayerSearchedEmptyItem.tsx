import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PlayerSearchedEmptyItem = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aquí aparecerán los jugadores </Text>
      <Text style={styles.subtitle}>
        Busca por su nombre en el campo superior
      </Text>
    </View>
  );
};

export default PlayerSearchedEmptyItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', marginTop: 50},
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
