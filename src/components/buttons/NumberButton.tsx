import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

type Props = {
  title?: string;
  value?: string;
  onPress?: () => void;
};

const NumberButton = ({title, value, onPress}: Props) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.conatiner}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default NumberButton;

const styles = StyleSheet.create({
  conatiner: {
    backgroundColor: 'gray',
    borderRadius: 15,
    paddingHorizontal: 5,
    marginTop: 10,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'comforta',
    textAlignVertical: 'center',
  },
});
