import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Layout from '../components/_Layout';

const CreateTeam = () => {
  return (
    <Layout>
      <Text
        style={{
          color: 'white',
          fontSize: 30,
          fontFamily: 'comforta',
          marginTop: 10,
        }}>
        Crear equipos
      </Text>
    </Layout>
  );
};

export default CreateTeam;

const styles = StyleSheet.create({});
