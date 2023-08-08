import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PlayerData} from '../lists/playersList/PlayersList';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  playerData: PlayerData;
};

const PlayerCard = ({playerData}: Props) => {
  return (
    <LinearGradient colors={['#1F5AE2', '#081785']} style={styles.container}>
      <Image
        source={{uri: playerData.player_image}}
        style={{width: 100, height: 100, borderRadius: 50}}
      />
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Text style={styles.name}>{playerData.player_name}</Text>
        <Text style={styles.name}> ({playerData.player_number})</Text>
      </View>
      <Text style={styles.team}>{playerData.player_age} años</Text>
      <Text style={styles.team}>{playerData.team_name}</Text>
    </LinearGradient>
  );
};

export default PlayerCard;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    height: 250,
    width: 200,
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
});
