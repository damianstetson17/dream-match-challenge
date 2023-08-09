import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {SetStateAction} from 'react';

type Props = {
  value: number;
  setValue: React.Dispatch<SetStateAction<number>>;
  selected?: boolean;
};

const NumberButton = ({value, setValue, selected = false}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => setValue(value)}
      style={[
        styles.container,
        {backgroundColor: selected ? '#1769aa' : 'gray'},
      ]}>
      <Text style={styles.title}>#{value}</Text>
    </TouchableOpacity>
  );
};

export default NumberButton;

const styles = StyleSheet.create({
  container: {
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
