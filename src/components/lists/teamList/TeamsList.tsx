import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TeamItem from './TeamItem';
import TeamEmptyList from './TeamEmptyList';

/**
 * Item type for created teams
 */
export type TeamData = {
  id: number;
  name: string;
  color: string;
};

const data: TeamData[] = [
  {id: 0, name: 'Los super pibes', color: '#9B1239'},
  {id: 1, name: 'Los come choripanes', color: '#308B39'},
];

const TeamsList = () => {
  return (
    <View style={{flexDirection: 'column', justifyContent: 'flex-start'}}>
      <FlatList
        data={data}
        horizontal
        renderItem={({item}) => <TeamItem teamData={item} />}
        ListEmptyComponent={<TeamEmptyList />}
      />
    </View>
  );
};

export default TeamsList;

const styles = StyleSheet.create({});
