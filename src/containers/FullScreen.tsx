import React, { ReactNode } from 'react'
import { StyleSheet, View } from 'react-native'

type FullScrennProps={
  children:ReactNode;
}

function FullScreen({children}:FullScrennProps) {
  return (
    <View style={styles.container}>{children}</View>
  )
};

export default FullScreen;
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,

  }
});