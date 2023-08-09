import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Team} from '../../../types';
import {useAppDispatch} from '../../../store/store';
import {deleteTeam, setTeamSelected} from '../../../store/slices/teamSlice';
import {NavigationProp, useNavigation} from '@react-navigation/native';

type Props = {
  teamData: Team;
};

const TeamItem = ({teamData}: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<any>>();

  const handleDeleteTeam = () => {
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
        {
          marginHorizontal: 10,
          padding: 10,
          borderColor: 'black',
          borderWidth: 0.5,
          borderRadius: 15,
          height: 150,
          width: 150,
          justifyContent: 'center',
          alignItems: 'center',
        },
        {backgroundColor: teamData?.number === 1 ? '#9B1239' : '#308B39'},
      ]}>
      {/* delete btn */}
      <TouchableOpacity
        onPress={handleDeleteTeam}
        style={{
          alignSelf: 'flex-end',
          position: 'absolute',
          top: 7,
          right: 7,
          padding: 2,
        }}>
        <Image
          style={[{height: 16, width: 16}]}
          source={require('../../../../assets/icons/delete_team.png')}
        />
      </TouchableOpacity>

      {/* team icon img */}
      <View
        style={{
          alignItems: 'center',
          marginBottom: 5,
          backgroundColor: '#b0b0b0',
          borderRadius: 50,
          padding: 5,
        }}>
        <Image
          style={[{height: 45, width: 45}]}
          source={require('../../../../assets/icons/club.png')}
        />
      </View>

      {/* football img */}
      <View
        style={{
          alignItems: 'center',
          position: 'absolute',
          top: 45,
          right: -40,
        }}>
        <Image
          style={[{height: 80, width: 80}]}
          source={require('../../../../assets/images/ball.png')}
        />
      </View>
      <Text style={{color: 'white', fontSize: 20, textAlign: 'left'}}>
        {teamData?.name}
      </Text>
    </TouchableOpacity>
  );
};

export default TeamItem;

const styles = StyleSheet.create({});
