import {StyleSheet, Text, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';
import React from 'react';

const actions = [
  {
    text: 'Crear Equipo',
    icon: require('../../../assets/icons/add-team.png'),
    name: 'add_team',
    position: 1,
    color: '#971238',
  },
  {
    text: 'Borrar Equipo',
    icon: require('../../../assets/icons/delete.png'),
    name: 'delete_team',
    position: 2,
    color: '#971238',
  },
];

const Fab = () => {
  return (
    <FloatingAction
      actions={actions}
      onPressItem={name => {
        console.log(`selected button: ${name}`);
      }}
      color="#81093A"
    />
  );
};

export default Fab;

const styles = StyleSheet.create({});
