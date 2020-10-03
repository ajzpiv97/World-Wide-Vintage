import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  Image,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { human } from "react-native-typography";
import * as Font from "expo-font";
import styles from "./styles";

const Home = () => {
  const [vintage, setVintage] = useState([
    { type: "MLB", key: "1" },
    { type: "NBA", key: "2" },
    { type: "NFL", key: "3" },
    { type: "Pokemon", key: "4" },
  ]);

  const [selected, setSelected] = useState("1");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar barStyle={"dark-content"} />
      </View>
      <View style={styles.homeImage}>
        <Text style={human.largeTitle}>World Wide Vintage</Text>
      </View>
      <ScrollView style={{ paddingLeft: 15 }}>
        <View style={styles.typesSpace}>
          {vintage.map(({ key, type }) => {
            return (
              <View key={key}>
                <Text
                  onPress={() => setSelected(key)}
                  style={[
                    styles.typesText,
                    { color: selected == key ? "black" : "grey" },
                  ]}
                >
                  {type}
                </Text>
              </View>
            );
          })}
        </View>
        <View>
          <VintageOptions type={"Popular Vintage"} />
          <VintageOptions type={"New Vintage"} />
          <VintageOptions type={"Highest Bid"} />
          <VintageOptions type={"Lowest Ask"} sty/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const VintageOptions = (props: { type: React.ReactNode }) => {
  return (
    <View style={{paddingBottom: 15}}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            fontSize: 20,
          }}
        >
          {props.type}
        </Text>
        <Text style={styles.seeAll}>See All {">"}</Text>
      </View>
      <ScrollView style={styles.options} horizontal={true}>
        <Text style={styles.text}></Text>
      </ScrollView>
    </View>
  );
};
