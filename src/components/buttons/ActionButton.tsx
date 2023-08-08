import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

type Props = {
  title?: string;
  bgColor?: string;
  width?: number;
  onPress?: () => void;
};

const ActionButton = ({title, bgColor, width, onPress}: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          {
            alignSelf: 'flex-end',
            backgroundColor: bgColor ?? '#222238',
            borderRadius: 13,
            paddingVertical: 5,
            paddingHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
          },
          width ? {width} : {},
        ]}>
        <Text
          style={{
            color: 'white',
            fontSize: 17,
            fontFamily: 'comfortaBold',
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ActionButton;

const styles = StyleSheet.create({});
