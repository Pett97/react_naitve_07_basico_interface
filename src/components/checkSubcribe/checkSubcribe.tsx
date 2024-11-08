import React, { useState } from "react";
import { Switch, Text, View } from "react-native";
import styles from './checkSubcribe.style';
function CheckSubcribe() {
  const [checked, setChecked] = useState(false);

  const handleSwitchChange = (value: boolean) => {
    setChecked(value);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text>Subscribe to Newsletter</Text>
      </View>
      <View>
        <Switch value={checked} onValueChange={handleSwitchChange}></Switch>
      </View>
    </View>
  );
}

export default CheckSubcribe;
