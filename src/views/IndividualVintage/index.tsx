import { } from '../Home/Components';
import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { human } from "react-native-typography";
import * as Font from "expo-font";
// import styles from "./styles";
import { VintagePreview, VintageOptions } from "../Home/Components";


const IndividualView = () => {

  return (

    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar barStyle={"dark-content"} />
      </View>
    </SafeAreaView>

  )


}
