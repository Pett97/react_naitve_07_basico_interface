import {StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  inputs:{
    marginTop:10,
    marginBottom:10,
    width:350, 
    textAlign:"left",
  },
  input:{
    borderWidth:3,
    borderRadius:2,
    marginTop:25,
    marginBottom:25
  },
  logo:{
    margin:25,
  },
  signUP:{
    fontWeight:"bold",
    fontSize:15,
  },
  text: {
    color: "red",
    textAlign:"center",
    fontWeight:"bold"
  },
});

export default styles;