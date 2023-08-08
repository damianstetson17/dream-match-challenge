import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Layout from '../components/_Layout';
import NumberButton from '../components/buttons/NumberButton';
import ActionButton from '../components/buttons/ActionButton';
import PlayersList from '../components/lists/playersList/PlayersList';
import {useNavigation, NavigationProp} from '@react-navigation/native';

const CreateTeam = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.title}>Crear equipo</Text>
        {/* name input */}
        <View style={{marginTop: 5}}>
          <Text style={styles.subTitle}>Nombre del equipo</Text>
          <View style={styles.txtInput}>
            <TextInput
              placeholder=". . ."
              maxLength={30}
              style={{color: 'white', fontSize: 20}}
              placeholderTextColor="white"
            />
          </View>
        </View>

        {/* number radio button */}
        <View style={styles.btnsTeamContainer}>
          <Text style={styles.subTitle}>Equipo número</Text>
          <NumberButton title="#1" value="1" />
          <NumberButton title="#2" value="2" />
        </View>

        {/* Team players */}
        <View style={styles.playerListTitle}>
          <Text style={styles.subTitle}>Jugadores</Text>
          <ActionButton title="Agregar Jugador" />
        </View>

        <PlayersList />

        {/* buttons bottom panel */}
        <View style={styles.bottomBtns}>
          <ActionButton
            title="Salir"
            bgColor="#f44336"
            width={100}
            onPress={() => navigation.navigate('home', {})}
          />
          <ActionButton
            title="Guardar"
            bgColor="#357a38"
            width={100}
            onPress={() => navigation.navigate('home', {})}
          />
        </View>
      </View>
    </Layout>
  );
};

export default CreateTeam;

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: 15},
  title: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'comforta',
    marginTop: 10,
  },
  subTitle: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'comforta',
    textAlignVertical: 'center',
  },
  txtInput: {
    backgroundColor: 'gray',
    borderRadius: 15,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  btnsTeamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  bottomBtns: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 25,
  },
  playerListTitle: {
    marginTop: 20,
    marginBottom:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
