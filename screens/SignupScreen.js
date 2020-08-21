import React from "react";
import {View,Keyboard,StyleSheet,TextInput,Text,Alert,TouchableOpacity,TouchableWithoutFeedback} from "react-native";
import BwBgSuR from '../component/Registration Page/BwBgSuR';


const SignupScreen = props => {
    return(
    <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
    <View style={styles.container}>

      <TextInput style={styles.inputcontainer}
      placeholderTextColor="#dddddd"
      placeholder="Enter Your Full Name"
      ></TextInput>

      <TextInput style={styles.inputcontainer}
      placeholderTextColor="#dddddd"
      placeholder="Enter User Name"
      ></TextInput>

      <TextInput style={styles.inputcontainer}
      keyboardType = "number-pad"
      placeholderTextColor="#dddddd"
      placeholder="Set Password"
      ></TextInput>



    <BwBgSuR text='SIGN-UP' color='#4ea0ae' onPress={()=>{props.navigation.navigate('Login')}} />

    </View>
    </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    fontSize:60,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"#1b262c"
  },
  inputcontainer:{
    marginTop:10,
    color:"white",
    height:50,
    width:300,
    borderWidth:2,
    padding:10,
    borderRadius:15,
    borderColor:"#23abab"
  },
});

export default SignupScreen;
