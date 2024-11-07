import React, { useState } from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import styles from './login.styles';

import { IMAGE_PATHS } from '../../constants/imagePaths';

function LoginScreen() {
  const[user,setUser] = useState("");
  const[password,setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View>
        <Image source={IMAGE_PATHS.logo}></Image>
      </View>
      <View>
        <Text>Sign Up</Text>
      </View>
      <View>
      <TextInput style={styles.inputs} placeholder='login' onChangeText={setUser} value={user}></TextInput>
      </View>
      <View>
      <TextInput style={styles.inputs} placeholder='senha' onChangeText={setPassword} value={password}></TextInput>
      </View>
    </View>
  )
}

export default LoginScreen;