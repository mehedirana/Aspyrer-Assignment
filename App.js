import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import LoadScreen from './screens/LoadScreen';
import LogInScreen from './screens/LogInScreen';
import RegisterScreen from './screens/RegisterScreen';



const Stack = createStackNavigator();

export default function App() {

  return (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen}/>
    <Stack.Screen name="Home" component={LoadScreen}/>
    <Stack.Screen name="Home" component={LogInScreen}/>
    <Stack.Screen name="Home" component={RegisterScreen}/>
  </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
   contrainer: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center"

   }
});
