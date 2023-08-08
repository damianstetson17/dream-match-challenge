import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const HomeBanner = () => {
  return (
    <LinearGradient
      colors={['#1F5AE2', '#081785']}
      start={{x: 0.0, y: 0.9}}
      end={{x: 0.6, y: 0}}
      style={{
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20
      }}>
      <View style={{justifyContent: 'space-evenly', padding: 10}}>
        <Text
          style={{
            color: 'white',
            fontSize: 25,
            fontFamily: 'comforta',
            fontWeight: 'bold',
            fontStyle: 'italic',
          }}>
          ¡Comienza ahora!
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            fontFamily: 'comforta',
          }}>
          Crea el equipo de tus sueños
        </Text>
      </View>

      <Image
        style={[{height: 100, width: 110}]}
        source={require('../../../assets/images/player.png')}
      />
    </LinearGradient>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({});
