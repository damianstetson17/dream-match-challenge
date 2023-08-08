import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../components/_Layout';
import RoundedButton from '../components/buttons/RoundedButton';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const Welcome = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <Layout>
      <View style={styles.container}>
        <View style={{backgroundColor: '#081785'}}>
          {/* title */}
          <Text style={styles.title}>My Dream Team</Text>

          {/* cicle figure */}
          <LinearGradient colors={['#1F5AE2', '#081785']} style={styles.circle}>
            <View style={styles.footballPlayer}>
              <Image
                style={[{height: 500, width: 500}]}
                source={require('../../assets/images/player_kick.png')}
                resizeMode="contain"
              />
            </View>
          </LinearGradient>
        </View>

        {/* welcome bottom button */}
        <View style={{marginVertical: 70, marginHorizontal: 20}}>
          <Text style={styles.subtitle}>Bienvenido</Text>
          <RoundedButton
            title="Comenzar"
            onPress={() => navigation.navigate('home', {})}
          />
        </View>
      </View>
    </Layout>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  circle: {
    borderRadius: 350,
    height: 450,
    width: 450,
    zIndex: -1,
    position: 'absolute',
    top: 20,
    left: 80,
    justifyContent: 'flex-end',
  },
  footballPlayer: {
    position: 'absolute',
    top: 10,
    right: 100,
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontFamily: 'comforta-bold',
    marginLeft: 10,
    marginTop: 25,
    marginBottom: 25,
  },
  subtitle: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'comforta',
    textAlign: 'center',
    marginBottom: 45,
  },
});
