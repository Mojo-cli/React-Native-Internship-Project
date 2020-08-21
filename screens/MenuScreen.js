import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Button } from 'react-native';
import BwBgHw from '../component/Menu Page/BwBgHw'
import BwBgDg from '../component/Menu Page/BwBgDg'
import BwBgCc from '../component/Menu Page/BwBgCc'
import BwBgTl from '../component/Menu Page/BwBgTl'
import BwBgLo from '../component/Menu Page/BwBgLo'

const MenuScreen = props => {



return(
  <View style = {styles.container}>

  <BwBgHw text="1. Hello World Applicaton" color="#00b7c2" onPress={()=>{props.navigation.navigate('Hello_World')}}/>

  <BwBgDg text="2. Dice Game Applicaton" color="#00b7c2" onPress={()=>{props.navigation.navigate('Dice_Game')}}/>

  <BwBgCc text="3. Currency Converter Applicaton" color="#00b7c2" onPress={()=>{props.navigation.navigate('Currency_Converter')}}/>

  <BwBgTl text="4. To Do List Applicaton" color="#00b7c2" onPress={()=>{props.navigation.navigate('To_Do')}}/>

  <BwBgLo text="Log Out" color="#00b7c2" onPress={()=>{props.navigation.replace('Login')}}/>





  </View>
);
};

const styles = StyleSheet.create({
  container:{
   flex:1,
   fontSize:60,
   alignItems:"center",
   justifyContent:"center",
   backgroundColor:"#1b262c"
 }
});

export default MenuScreen;
