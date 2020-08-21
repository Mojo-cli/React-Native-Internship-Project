import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const BwBgLo = props => {
  const content = (
    <View style={[styles.button, { backgroundColor: props.color }]}>
    <Text style={styles.text}>{props.text}</Text>
    </View>
  )
return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
  button:{
     marginTop:50,
     padding:10,
     width:150,
     borderRadius:10
  },
  text:{
  color:"white",
  textAlign:"center",
  fontSize:15
  }
});

export default BwBgLo;
