import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  title?: string;
  onPress?: () => void;
};

const RoundedButton = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#081785',
    marginHorizontal: 100
  },
  title: {
    color: '#fff',
    fontFamily:'comforta',
    textAlign: 'center',
    fontSize: 18
  },
});
