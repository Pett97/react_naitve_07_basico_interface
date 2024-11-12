import React, { useState } from "react";
import { Image, Text, TextInput, View, StyleSheet } from "react-native";
import styles from "./login.styles";
import { IMAGE_PATHS } from "../../constants/imagePaths";
import CheckSubcribe from "../../components/checkSubcribe/checkSubcribe";
import ButtonLogin from "../../components/buttonLogin/buttonLogin";

function LoginScreen() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const[checked,setChecked] = useState(false);

  const handleSwitchChange = (value:boolean)=>{
    setChecked(value);
    if(value ===true){
      console.log(`USUARIO: ${user}, SENHA: ${password}`)
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={IMAGE_PATHS.logo} />
      </View>
      <View>
        <Text style={styles.signUP}>Sign Up</Text>
      </View>

      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="Login"
          onChangeText={setUser}
          value={user}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
      </View>

      <View>
        <CheckSubcribe checked={checked} onSwitchChange={handleSwitchChange} />
        <ButtonLogin />
      </View>
    </View>
  );
}

export default LoginScreen;
