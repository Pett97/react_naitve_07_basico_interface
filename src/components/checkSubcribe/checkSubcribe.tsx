import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import styles from './checkSubcribe.style';

type CheckSubcribeProps={
  checked:boolean;
  onSwitchChange:(value:boolean)=>void;
};

function CheckSubcribe({checked,onSwitchChange}:CheckSubcribeProps) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Subscribe to Newsletter</Text>
      </View>
      <View>
        <Switch value={checked} onValueChange={onSwitchChange}></Switch>
      </View>
    </View>
  );
}

export default CheckSubcribe;
