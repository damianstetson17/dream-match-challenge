import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { PlayerData } from '../../../types';
import { useAppDispatch } from '../../../store/store';
import { deletePlayer } from '../../../store/slices/teamSlice';

type Props = {
  playerData: PlayerData;
};

const PlayerItem = ({playerData}: Props) => {

  const dispatch = useAppDispatch();

  //delete player from selected team state
  const deletePlayerInSelectedTeam = () => {
    dispatch(deletePlayer(playerData.player_name))
  };

  return (
    <View style={styles.container}>
      {/* player photo */}
      <View style={{flexDirection: 'row'}}>
        <Image
          source={{uri: playerData.player_image}}
          style={{width: 70, height: 70, borderRadius: 50}}
        />

        {/* player data */}
        <View style={{marginLeft: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.name}>{playerData.player_name}</Text>
            <Text style={styles.name}> ({playerData.player_number})</Text>
          </View>
          <Text style={styles.team}>{playerData.player_age} años</Text>
          <Text style={styles.team}>{playerData.team_name}</Text>
        </View>
      </View>

      {/* delete action */}
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={() => deletePlayerInSelectedTeam()} style={styles.deleteBtn}>
          <Image
            source={require('../../../../assets/icons/delete.png')}
            style={{
              width: 26,
              height: 26,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlayerItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  team: {
    fontSize: 20,
    color: 'white',
  },
  actionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    borderRadius: 15,
    padding: 20,
    backgroundColor: '#f44336',
  },
});
