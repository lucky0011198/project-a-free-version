import React, { Component, useEffect } from "react";

import Screens from "./Screens";

import { Icon } from "react-native-magnus";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ({ navigation }) {
  useEffect(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@App_state");
      if (jsonValue) {
        navigation.replace("Home");
      }

      alert(jsonValue);
    } catch (e) {
      alert(e);
    }
  }, []);

  return (
    <>
      <Screens data={navigation} />
    </>
  );
}
