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

  const mostPopular = [
    { uri: 'https://reactnative.dev/img/tiny_logo.png', name: "Lebron James", offer: 'Highest Bid', maxBid: 100, bidTime: 5},
    { uri: '', name: "Lebron James", offer: 'Highest Bid'}]

  const [selected, setSelected] = useState("1");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar barStyle={"dark-content"} />
      </View>
      <View style={styles.homeImage}>
        <Text style={human.largeTitle}>World Wide Vintage</Text>
      </View>
      <ScrollView scrollEventThrottle={16}>
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
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "black",
            marginBottom: 38,
          }}
        ></View>
        <View style={{ flex: 1 }}>
          <VintageOptions type={"Popular Vintage"}></VintageOptions>
          <View style={[styles.options]}>
            <ScrollView horizontal={true}>
              {mostPopular.map(({ uri, name, offer, maxBid, bidTime}) => {
                return (
                  <VintagePreview
                    uri={uri}
                    name={name}
                    typeOffer={offer}
                    highestBid = {maxBid}
                    bidTime = {bidTime}/>
                    )
              })}
            </ScrollView>
          </View>

          <VintageOptions type={"New Vintage"}></VintageOptions>
          <View style={[styles.options, { paddingLeft: 15 }]}></View>

          <VintageOptions type={"Highest Bid"}></VintageOptions>
          <View style={[styles.options, { paddingLeft: 15 }]}></View>

          <VintageOptions type={"Lowest Ask"}></VintageOptions>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const VintageOptions = (props: { type: React.ReactNode }) => {
  return (
    <View style={{ marginBottom: 10, marginTop: 10 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          paddingLeft: 15
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
    </View>
  );
};

const VintagePreview = (props: { uri: any, name: string, typeOffer: string, highestBid: any, bidTime: any }) => (
  <View
    style={{
      height: 250,
      width: 150,
      marginHorizontal: 10,
      flex: 1,
      borderWidth: 5,
      borderColor: '#f2f2f2'
    }}
  >
    <View
      style={{
        flex: 2,
        maxWidth: 140,
        maxHeight: 140,
        backgroundColor: '#fff',

      }}
    >
      <Image
        source={{
          uri: props.uri,
        }}
        style={{
          flex: 1,
          resizeMode: "cover",
        }}
      ></Image>
    </View>
    <View style={{
      flex: 1,
      backgroundColor: '#f2f2f2'
    }}
    >
      <Text style={{marginTop: 5, marginBottom: 8, color: 'black', fontSize: 12, fontWeight: '500', overflow: 'hidden', }}>{props.name}</Text>
      <Text style={{marginBottom: 5, color: 'black', fontSize: 12}}>{props.typeOffer}</Text>
      <Text style={{marginBottom: 5, color: 'black', fontSize: 24, fontWeight: 'bold'}}>{'$'}{props.highestBid}</Text>
      <Text style={{marginBottom: 5, color: 'black', fontSize: 12}}>{props.bidTime} minutes ago</Text>

    </View>
  </View>
);

export default Home;
