import React from "react";
import {View,Text,StyleSheet} from "react-native";



export default class App extends React.Component{

  render(){

    return(
    <View style={styles.mojo}>
      <Text style={styles.textadwait}>Hello Adwait Gaikwad !</Text>
    </View>
    );
  }

}

const styles = StyleSheet.create(
  {
  mojo:
  {
    flex:1,
    backgroundColor:"#222831",
    alignItems:"center",
    justifyContent:"center",
  },
  textadwait:
  {
    color:"white",
    fontSize:30
  }
}
)
