import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TeamItem from './TeamItem';
import TeamEmptyList from './TeamEmptyList';
import {useAppSelector} from '../../../store/store';

const TeamsList = () => {
  const createdTeams = useAppSelector(state => state.teams.teams);

  return (
    <>
      <FlatList
        data={createdTeams}
        horizontal
        renderItem={({item}) => <TeamItem teamData={item} />}
        ListEmptyComponent={<TeamEmptyList />}
        ItemSeparatorComponent={() => (
          <View style={{marginHorizontal: 1}}>
            <Image
            source={require('../../../../assets/icons/versus.png')}
            style={{width: 40, height: 40}}
          />
          </View>
        )}
      />
      {
        //show max team length if exists at least one team
        createdTeams.length > 0 && (
          <Text style={styles.footerLength}>
            Tienes {createdTeams.length} de 2 equipos creados
          </Text>
        )
      }
    </>
  );
};

export default TeamsList;

const styles = StyleSheet.create({
  footerLength: {
    color: 'white',
    fontSize: 15,
    marginTop: 10,
    fontFamily: 'comforta',
    textAlignVertical: 'center',
  },
});
