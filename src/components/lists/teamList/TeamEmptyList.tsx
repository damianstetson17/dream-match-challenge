import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const TeamEmptyList = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View>
      <Text style={styles.title}>No hay equipos creados</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('createTeam', {});
        }}>
        <Text style={styles.subtitle}>¡Toca aquí para crear uno!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TeamEmptyList;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: 'gray',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    fontFamily: 'comfortaBold',
  },
});
