import { Dimensions, StyleSheet } from "react-native";

const styles=StyleSheet.create({
  container:{
    borderWidth:2,
    backgroundColor: '#f0f0f0',
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  inputs:{
    width:Dimensions.get("window").width,
    borderWidth:2,
    borderRadius:10,

  }
});

export default styles;