import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TeamData} from './TeamsList';

type Props = {
  teamData?: TeamData;
};

const TeamItem = ({teamData}: Props) => {
  return (
    <TouchableOpacity
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
        {backgroundColor: teamData?.color},
      ]}>
      {/* delete btn */}
      <TouchableOpacity
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
