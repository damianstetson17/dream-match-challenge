import React from 'react'
import { useAppSelector } from '../../../store/store';
import PlayerEmptyItem from '../playersList/PlayerEmptyItem';
import PlayerSearchedItem from './PlayerSearchedItem';
import { FlatList } from 'react-native-gesture-handler';
import PlayerSearchedEmptyItem from './PlayerSearchedEmptyItem';

const SearchList = () => {
    const playersFetched = useAppSelector(state => state.teams.playerFetchedData);

  return (
    <FlatList
      data={playersFetched}
      renderItem={({item}) => <PlayerSearchedItem playerData={item} />}
      ListEmptyComponent={<PlayerSearchedEmptyItem />}
    />
  )
}

export default SearchList