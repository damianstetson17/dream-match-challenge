import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Layout from '../components/_Layout';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import TeamsList from '../components/lists/teamList/TeamsList';
import HomeBanner from '../components/banners/HomeBanner';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <Layout>
      <View style={{marginHorizontal: 15}}>
        {/* title */}
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            fontFamily: 'comforta',
            marginTop: 10,
          }}>
          Mis equipos
        </Text>

        {/* Go to create team banner */}
        <HomeBanner />

        {/* actions panel */}
        <TouchableOpacity onPress={() => navigation.navigate('createTeam', {})}>
          <View
            style={{
              alignSelf: 'flex-end',
              backgroundColor: '#222238',
              borderRadius: 13,
              paddingVertical: 5,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontFamily: 'comforta-bold',
              }}>
              Crear un Equipo
            </Text>
          </View>
        </TouchableOpacity>

        {/*teams list */}
        <LinearGradient
          colors={['#1F5AE2', '#081785']}
          style={{
            borderRadius: 350,
            height: 450,
            width: 450,
            zIndex: -1,
            position: 'absolute',
            top: 220,
            right: 80,
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              position: 'absolute',
              top: 50,
              left: 30,
            }}>
            <Image
              style={[{height: 400, width: 400}]}
              source={require('../../assets/images/player_head.png')}
              resizeMode="cover"
            />
          </View>
        </LinearGradient>

        {/* team panel */}
        <View style={{marginTop: 65, marginLeft: 5}}>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              marginLeft: 5,
              marginBottom: 25,
              fontFamily: 'comforta',
            }}>
            Equipos creados
          </Text>
          <View
            style={{
              alignItems: 'center',
            }}>
            <TeamsList />
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({});
