import React, { Component } from 'react';
import { View} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as firebase from 'firebase';

export class LoadScreen extends Component{

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.props.navigation.navigate("HomeScreen");
            }
            else{
                this.props.navigation.navigate("LogInScreen");
            }
          
        })
      }

    render(){
    return(
        <View>
            <text>load screeen</text>
        </View>

    )
    }
}

