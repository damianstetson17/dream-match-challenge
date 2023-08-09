import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Team} from '../../../types';
import {useAppDispatch} from '../../../store/store';
import {deleteTeam, setTeamSelected} from '../../../store/slices/teamSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import ConfirmPopup from '../../popups/ConfirmPopup';

type Props = {
  teamData: Team;
};

const TeamItem = ({teamData}: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<any>>();

  const [showPopup, setShowPopup] = useState(false);

  const handleDeleteTeam = () => {
    setShowPopup(false);
    dispatch(deleteTeam(teamData.name));
  };

  const handleGoToEdit = () => {
    dispatch(setTeamSelected(teamData));
    navigation.navigate('createTeam', {});
  };

  return (
    <TouchableOpacity
      onPress={handleGoToEdit}
      style={[
        styles.container,
        {backgroundColor: teamData?.number === 1 ? '#9B1239' : '#308B39'},
      ]}>
      {/* delete btn */}
      <TouchableOpacity
        onPress={() => setShowPopup(true)}
        style={styles.deleteBtn}>
        <Image
          style={[{height: 16, width: 16}]}
          source={require('../../../../assets/icons/delete_team.png')}
        />
      </TouchableOpacity>

      {/* team icon img */}
      <View style={styles.teamIcon}>
        <Image
          style={[{height: 45, width: 45}]}
          source={require('../../../../assets/icons/club.png')}
        />
      </View>

      {/* football img */}
      <View style={styles.footballImg}>
        <Image
          style={[{height: 80, width: 80}]}
          source={require('../../../../assets/images/ball.png')}
        />
      </View>

      {/* team name */}
      <Text style={styles.teamName}>
        {teamData?.name?.length > 0 ? (
          teamData?.name
        ) : (
          <Text style={styles.teamName}>. . .</Text>
        )}
      </Text>

      {/* team details (formed, complete or incomplete) */}
      <View style={{alignItems: 'center'}}>
        <Text style={styles.formed}>Formado</Text>
        {
          //team complete
          teamData?.players.length === 5 ? (
            <Text style={styles.complete}>Completo</Text>
          ) : (
            <Text style={styles.incomplete}>Incompleto</Text>
          )
        }
      </View>

      {/* team limit popup */}
      <ConfirmPopup
        title="Borrar Equipo"
        message="¿Estás seguro que deseas borrar el equipo? Se perderán todos sus datos cargados"
        show={showPopup}
        setShow={setShowPopup}
        onConfirmPressed={handleDeleteTeam}
        onCancelPressed={() => setShowPopup(false)}
      />
    </TouchableOpacity>
  );
};

export default TeamItem;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    padding: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    borderRadius: 15,
    height: 180,
    width: 160,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteBtn: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 7,
    right: 7,
    padding: 2,
  },
  teamIcon: {
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#b0b0b0',
    borderRadius: 50,
    padding: 5,
  },
  footballImg: {
    alignItems: 'center',
    position: 'absolute',
    top: 45,
    right: -40,
  },
  teamName: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  formed: {fontFamily: 'comfortaBold', color: '#91ff35'},
  complete: {fontFamily: 'comfortaBold', color: '#91ff35'},
  incomplete: {fontFamily: 'comfortaBold', color: '#ff9100'},
});
