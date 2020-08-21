import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const BwBgSu = props => {
  const content = (
    <View style={[styles.button, { backgroundColor: props.color }]}>
    <Text style={styles.text}>{props.text}</Text>
    </View>
  )
return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
}

const styles = StyleSheet.create({
  button:{
     marginTop:5,
     padding:4,
     width:150,
     borderRadius:10
  },
  text:{
  color:"white",
  textAlign:"center",
  fontSize:15
  }
});

export default BwBgSu;
