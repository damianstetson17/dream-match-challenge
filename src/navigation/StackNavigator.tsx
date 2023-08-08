import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import CreateTeam from '../screens/CreateTeam';

const StackNavigator = () => {

const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{ animation: "fade" }}
      >
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="createTeam" component={CreateTeam} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})