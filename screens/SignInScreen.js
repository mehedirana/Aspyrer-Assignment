import React from 'react';

const SignInScreen =({navigation})=>{
    return (
        <KeyboardAvoidingView >
          <Header span>
            <Left>
            </Left>
            <Body>
              <Title>please log in</Title>
            </Body>
            <Right />
          </Header>
    
          <View style={{flexDirection:"column", padding:15}}>
    
            <Item floatingLabel style={{borderBottomColor:'blue', padding:5}}>
              <Label>Username</Label>
              <Input />
            </Item>
    
            <Item floatingLabel style={{borderBottomColor:'blue', padding:5}} >
              <Label>Password</Label>
              <Input />
            </Item>
    
            <Button block  style={{ justifyContent: 'center',}}>
              <Text style={{color:'white'}}>sign in</Text>
            </Button>
    
            <TouchableOpacity
            onPress={()=>{navigation.navigate("SignUpScreen")}}
            >
              <Text style={{textAlign:'center', padding:10,  fontWeight:'bold'}}>don't have an account?</Text>
            </TouchableOpacity>
    
          </View>
        </KeyboardAvoidingView>
      )

}

export default SignInScreen;