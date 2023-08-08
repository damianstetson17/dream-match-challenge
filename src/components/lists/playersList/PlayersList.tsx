import {FlatList, StyleSheet,} from 'react-native';
import React from 'react';
import PlayerItem from './PlayerItem';
import PlayerEmptyItem from './PlayerEmptyItem';

const players: PlayerData[] = [
  {
    player_image:
      'https://apiv3.apifootball.com/badges/players/9898_k-benzema.jpg',
    player_name: 'K. Benzema',
    player_number: '9',
    player_age: "35",
    team_name: 'Real Madrid',
  },
  {
    player_image:
      'https://apiv3.apifootball.com/badges/players/9898_k-benzema.jpg',
    player_name: 'K. Benzema',
    player_number: '9',
    player_age: "35",
    team_name: 'Real Madrid',
  },
  {
    player_image:
      'https://apiv3.apifootball.com/badges/players/9898_k-benzema.jpg',
    player_name: 'K. Benzema',
    player_number: '9',
    player_age: "35",
    team_name: 'Real Madrid',
  },
  {
    player_image:
      'https://apiv3.apifootball.com/badges/players/9898_k-benzema.jpg',
    player_name: 'K. Benzema',
    player_number: '9',
    player_age: "35",
    team_name: 'Real Madrid',
  },
];

/**
 * Item type for players
 */
export type PlayerData = {
  player_image: string;
  player_name: string;
  player_number: string;
  player_age: string;
  team_name: string;
};

const PlayersList = () => {
  return (
      <FlatList
        data={players}
        renderItem={({item}) => <PlayerItem playerData={item} />}
        ListEmptyComponent={<PlayerEmptyItem/>}
      />
  );
};

export default PlayersList;

const styles = StyleSheet.create({});
