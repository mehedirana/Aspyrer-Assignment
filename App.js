import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoadScreen from './screens/LoadScreen';
import LogInScreen from './screens/LogInScreen';
import RegisterScreen from './screens/RegisterScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as firebase from 'firebase';
import {firebaseConfig} from './config';
firebase.initializeApp(firebaseConfig);

const Stack = createStackNavigator();

export class App extends React.Component {

render(){
  return (
  <Stack.Navigator>
    {/* <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Home" component={LoadScreen}/> */}
    <Stack.Screen name="Home" component={LogInScreen}/>
    {/* <Stack.Screen name="Home" component={RegisterScreen}/> */}
  </Stack.Navigator>
  );
}
}

const styles = StyleSheet.create({
   contrainer: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center"

   }
});
