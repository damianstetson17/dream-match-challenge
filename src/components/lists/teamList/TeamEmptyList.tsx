import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {setTeamSelected} from '../../../store/slices/teamSlice';
import {useAppDispatch} from '../../../store/store';

const TeamEmptyList = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useAppDispatch();

  //go to create team screen and set in null selected state (bcs is new)
  const handleGotToCreateTeam = () => {
    navigation.navigate('createTeam', {});
    dispatch(setTeamSelected(null));
  };

  return (
    <View>
      <TouchableOpacity onPress={handleGotToCreateTeam}>
        <Text style={styles.title}>No hay equipos creados</Text>
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
