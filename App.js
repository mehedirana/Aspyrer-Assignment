import React from 'react';
import { View, Text } from 'react-native';



export default function App() {

  return (
 <View style={StyleSheet.contrainer}>
   <Text>HI</Text>
 </View>
  );
}

const styles = StyleSheet.create({
   contrainer: {
     flex: 1,
     justyfyContent: "center",
     alignItems: "center"

   }
});
