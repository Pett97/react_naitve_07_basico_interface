import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './buttonLogin.style'

function ButtonLogin() {
  return (
    <TouchableOpacity><Text style={styles.text}>Lets'Go</Text></TouchableOpacity>
  )
}

export default ButtonLogin