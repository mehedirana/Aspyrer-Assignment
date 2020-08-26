import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export class LogInScreen extends Component{

    render(){
    return(
        <View style={styles.contrainer}>
            <text>log in screeen</text>
        </View>

    )
    }
}

const styles = StyleSheet.create({
    contrainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        
    },
})