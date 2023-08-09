import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Layout from './_Layout';
import NumberButton from '../components/buttons/NumberButton';
import ActionButton from '../components/buttons/ActionButton';
import PlayersList from '../components/lists/playersList/PlayersList';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import AddPlayerBottomSheet from '../components/bottomsheets/AddPlayerBottomSheet';
import {useAppDispatch, useAppSelector} from '../store/store';
import {addNewTeam, resetData, updateTeam} from '../store/slices/teamSlice';
import {Team} from '../types';
import ConfirmPopup from '../components/popups/ConfirmPopup';
import OkPopup from '../components/popups/OkPopup';

const CreateTeam = () => {
  const createdTeams = useAppSelector(state => state.teams.teams);

  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useAppDispatch();

  const [showSavePopup, setShowSavePopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [errorPopupMsg, setErrorPopupMsg] = useState('');

  const [visibility, setVisibility] = useState(false);
  const teamSelected = useAppSelector(state => state.teams.teamSelected);
  const oldNameTeamSelected = teamSelected?.name;

  const [teamNewName, setTeamNewName] = useState('');
  const [teamNewNumber, setTeamNewNumber] = useState(1);

  // if comes from a existing team
  useEffect(() => {
    if (teamSelected) {
      setTeamNewName(teamSelected.name);
      setTeamNewNumber(teamSelected.number);
    }
  }, []);

  //handle bottom sheet visibility
  const handleAddPlayer = () => {
    dispatch(resetData());
    setVisibility(!visibility);
  };

  const handleAddTeam = () => {
    //show error if team name is empty
    if (teamNewName.length === 0) {
      setErrorPopupMsg('El nombre del equipo no puede estar vacio');
      setShowSavePopup(false);
      setShowErrorPopup(true);
      return;
    }

    //if exists an old name, is a team update
    if (oldNameTeamSelected && teamSelected) {
      const updatedTeam: Team = {
        name: teamNewName,
        number: teamNewNumber,
        players: teamSelected.players,
      };

      dispatch(
        updateTeam({
          oldName: oldNameTeamSelected,
          newTeamValues: updatedTeam,
        }),
      );
    } else {
      /*
        we create a new team using the players added 
        in state.teams.teamSelected at AddPlayerBottomSheet component
      */

      //check if not exists already a teamwith the same name
      if (createdTeams.find(team => team.name === teamNewName)) {
        setErrorPopupMsg('Ya existe un equipo con el mismo nombre');
        setShowSavePopup(false);
        setShowErrorPopup(true);
        return;
      }

      const newTeam: Team = {
        name: teamNewName,
        number: teamNewNumber,
        players: teamSelected?.players ?? [],
      };

      dispatch(addNewTeam(newTeam));
    }

    //return to home screen
    navigation.navigate('home', {});
  };

  const handleCancel = () => {
    //return to home screen
    navigation.navigate('home', {});
  };

  return (
    <Layout>
      <View style={styles.container}>
        {/* player bg img */}
        <View style={styles.footballPlayer}>
          <Image
            style={[{height: 400, width: 400}]}
            source={require('../../assets/images/player_running.png')}
          />
        </View>

        <Text style={styles.title}>Crear equipo</Text>
        {/* name input */}
        <View style={{marginTop: 5}}>
          <Text style={styles.subTitle}>Nombre del equipo</Text>
          <View style={styles.txtInput}>
            <TextInput
              placeholder=". . ."
              value={teamNewName}
              onChangeText={newName => setTeamNewName(newName)}
              maxLength={20}
              style={{color: 'white', fontSize: 20}}
              placeholderTextColor="white"
            />
          </View>
        </View>

        {/* number radio button */}
        <View style={styles.btnsTeamContainer}>
          <View>
            <Text style={styles.subTitle}>Equipo número</Text>
            <Text style={[styles.subTitle, {fontSize: 15}]}>
              (Color del equipo)
            </Text>
          </View>
          <NumberButton
            value={1}
            bgColor="#9B1239"
            setValue={setTeamNewNumber}
            selected={teamNewNumber === 1}
          />
          <NumberButton
            value={2}
            bgColor="#308B39"
            setValue={setTeamNewNumber}
            selected={teamNewNumber === 2}
          />
        </View>

        {/* Team players */}
        <View style={styles.playerListTitle}>
          <Text style={styles.subTitle}>Jugadores</Text>
          <ActionButton title="Agregar Jugador" onPress={handleAddPlayer} />
        </View>

        {/* players added in the current team */}
        <PlayersList />

        {/* buttons bottom panel */}
        <View style={styles.bottomBtns}>
          <ActionButton
            title="Salir"
            bgColor="#f44336"
            width={100}
            onPress={handleCancel}
          />
          <ActionButton
            title="Guardar"
            bgColor="#357a38"
            width={100}
            onPress={() => setShowSavePopup(true)}
          />
        </View>
      </View>

      {/* save popup confirmation */}
      <ConfirmPopup
        title="¿Guardar Equipo?"
        message="Podrás editarlo desde la página principal"
        show={showSavePopup}
        setShow={setShowSavePopup}
        onConfirmPressed={handleAddTeam}
        onCancelPressed={() => setShowSavePopup(false)}
      />

      {/* name lenght restriction popup */}
      <OkPopup
        title="Error en nombre del equipo"
        message={errorPopupMsg}
        show={showErrorPopup}
        setShow={setShowErrorPopup}
        onConfirmPressed={() => setShowErrorPopup(false)}
      />

      {/* fetch and add player */}
      <AddPlayerBottomSheet
        visibility={visibility}
        setVisibility={setVisibility}
      />
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
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footballPlayer: {
    position: 'absolute',
    bottom: 60,
    left: 30,
  },
});
