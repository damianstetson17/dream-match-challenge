import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../components/_Layout';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import TeamsList from '../components/lists/teamList/TeamsList';
import HomeBanner from '../components/banners/HomeBanner';
import LinearGradient from 'react-native-linear-gradient';
import ActionButton from '../components/buttons/ActionButton';
import {useAppDispatch, useAppSelector} from '../store/store';
import {setTeamSelected} from '../store/slices/teamSlice';

const Home = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const createdTeams = useAppSelector(state => state.teams.teams);
  const dispatch = useAppDispatch();

  //go to create team screen and set in null selected state (bcs is new)
  const handleGotToCreateTeam = () => {
    if (createdTeams.length < 2) {
      dispatch(setTeamSelected(null));
      navigation.navigate('createTeam', {});
    } else {
      //show popup
    }
  };

  return (
    <Layout>
      <View style={styles.container}>
        {/* title */}
        <Text style={styles.title}>Mis equipos</Text>

        {/* '¡Comienza ahora!' banner */}
        <HomeBanner />

        {/* create team button */}
        <ActionButton title="Crear un Equipo" onPress={handleGotToCreateTeam} />

        {/* circle */}
        <LinearGradient colors={['#1F5AE2', '#081785']} style={styles.circle}>
          <View style={styles.footballPlayer}>
            <Image
              style={[{height: 400, width: 400}]}
              source={require('../../assets/images/player_head.png')}
            />
          </View>
        </LinearGradient>

        {/* team list */}
        <View style={styles.teamContainer}>
          <Text style={styles.subtitle}>Equipos formados</Text>
          <View style={{alignItems: 'center'}}>
            <TeamsList />
          </View>
        </View>
      </View>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {marginHorizontal: 15},
  title: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'comforta',
    marginTop: 10,
  },
  circle: {
    borderRadius: 350,
    height: 450,
    width: 450,
    zIndex: -1,
    position: 'absolute',
    top: 220,
    right: 80,
    justifyContent: 'flex-end',
  },
  footballPlayer: {
    position: 'absolute',
    top: 50,
    left: 30,
  },
  subtitle: {
    color: 'white',
    fontSize: 25,
    marginLeft: 5,
    marginBottom: 25,
    fontFamily: 'comforta',
  },
  teamContainer: {
    marginTop: 65,
    marginLeft: 5,
  },
});
