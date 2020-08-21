import React from "react";
import {View,StyleSheet,TextInput,Text,Button,Alert,TouchableOpacity,Image} from "react-native";
import BwBgSu from '../component/Login Page/BwBgSu';
import BwBgLi from '../component/Login Page/BwBgLi';


const LoginScreen = props => {


    return(
      <View style={styles.container}>
     <Image style = {styles.logo}
   source={require("../src/images/funny_silly_face.jpg")}
   />
       <TextInput style={styles.inputcontainer}
       placeholderTextColor="white"
       placeholder="Enter Your User Name"
       ></TextInput>
       <TextInput style={styles.inputcontainer}
       placeholderTextColor="white"
       placeholder="Enter Your Password"
       ></TextInput>
       <Text style = {styles.undertext}>
        Already User ?
       </Text>

      <BwBgLi text='LOG IN' color='#0f4c75' onPress={()=>{props.navigation.replace('Menu')}} />

        <Image style = {styles.line}
      source={require("../src/images/line.png")}
      />
      <Text style = {styles.undertext}>
       New To Our Family ?
      </Text>
      <BwBgSu text='SIGN-UP' color='#4ea0ae' onPress={()=>{props.navigation.navigate('Signup')}} />

     </View>
    );
};

const styles = StyleSheet.create({
  container:{
  flex:1,
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

line:{
  marginTop:5,
  marginBottom:1,
  width:700,
  height:1

},
undertext:{
  marginTop:5,
  fontSize:10,
  color:"#dddddd"
},
logo:{
  justifyContent:"center",
  width:120,
  height:120,
  borderRadius:360
}

});

export default LoginScreen;
