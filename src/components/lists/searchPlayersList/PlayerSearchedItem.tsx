import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {PlayerData} from '../../../types';
import {useAppDispatch, useAppSelector} from '../../../store/store';
import {addPlayer} from '../../../store/slices/teamSlice';
import {convertDateFormat} from '../../../utils/dateFormater';

type Props = {
  playerData: PlayerData;
};

const PlayerSearchedItem = ({playerData}: Props) => {
  const teamSelectedPlayers = useAppSelector(
    state => state.teams.teamSelected?.players,
  );
  const teams = useAppSelector(state => state.teams.teams);

  const dispatch = useAppDispatch();
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setDisable(isPlayerHire());
  }, [teamSelectedPlayers]);

  //verify if the player is corrently hired in any team
  const isPlayerHire = () => {
    let result = false;

    //if player is already hired in current team
    if (teamSelectedPlayers) result = teamSelectedPlayers.includes(playerData);

    //if player is already hired in any team
    teams.map(t => {
      if (t.players) {
        if (t.players.find(p => p.player_name === playerData.player_name)) {
          result = true;
        }
      }
    });

    return result;
  };

  //add player from selected team state
  const addPlayerInSelectedTeam = () => {
    dispatch(addPlayer(playerData));
  };

  return (
    <View style={styles.container}>
      {/* player photo */}
      <View style={{flexDirection: 'row'}}>
        {playerData.player_image ? (
          <Image
            source={{uri: playerData.player_image}}
            style={{width: 70, height: 70, borderRadius: 50}}
          />
        ) : (
          <Image
            source={require('../../../../assets/images/profile.png')}
            style={{width: 75, height: 75, borderRadius: 50}}
          />
        )}

        {/* player data */}
        <View style={{marginLeft: 10}}>
          <View style={{flexDirection: 'row'}}>
            {/* player name */}
            <Text style={styles.name}>{playerData.player_name}</Text>

            {/* player number */}
            {playerData.player_number && (
              <Text style={styles.name}> ({playerData.player_number})</Text>
            )}
          </View>
          {/* player bday */}
          {playerData.player_birthdate ? (
            <Text style={styles.team}>
              {convertDateFormat(playerData.player_birthdate)}
            </Text>
          ) : (
            <Text style={styles.team}> - </Text>
          )}
          {/* player team */}
          <Text style={styles.team} numberOfLines={1} >
            {playerData.team_name}
          </Text>
        </View>
      </View>

      {/* hire action */}
      <View style={styles.actionContainer}>
        <TouchableOpacity
          onPress={() => addPlayerInSelectedTeam()}
          disabled={disable}
          style={[
            styles.hireBtn,
            {backgroundColor: disable ? 'gray' : '#357a38'},
          ]}>
          <Image
            source={require('../../../../assets/icons/hire.jpg')}
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayerSearchedItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  team: {
    fontSize: 20,
    color: 'black',
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  hireBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 14,
    width: 55,
    height: 55,
    borderRadius: 10,
    padding: 20,
  },
});
