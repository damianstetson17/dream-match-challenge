import {FlatList} from 'react-native';
import React from 'react';
import PlayerItem from './PlayerItem';
import PlayerEmptyItem from './PlayerEmptyItem';
import {useAppSelector} from '../../../store/store';
const PlayersList = () => {
  const teamSelected = useAppSelector(state => state.teams.teamSelected);

  return (
    <FlatList
      data={teamSelected?.players ?? []}
      renderItem={({item}) => <PlayerItem playerData={item} />}
      ListEmptyComponent={<PlayerEmptyItem />}
    />
  );
};

export default PlayersList;
