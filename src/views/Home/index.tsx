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

  const mostPopularNBA = [
    { uri: '', name: "Lebron James", type: 'Lowest Ask', offer: 100, bidTime: 5 },
    { uri: '', name: "Michael Jordan", type: 'Lowest Ask', offer: 600, bidTime: 30 },
    { uri: '', name: "Larry Bird", type: 'Lowest Ask', offer: 440, bidTime: 12 },
    { uri: '', name: "Reggie Miller", type: 'Lowest Ask', offer: 330, bidTime: 20 },
    { uri: '', name: "Steph Curry", type: 'Lowest Ask', offer: 50, bidTime: 2 },]

  const highestNBA = [
    { uri: '', name: "Lebron James", type: 'Highest Bid', offer: 100, bidTime: 5 },
    { uri: '', name: "Michael Jordan", type: 'Highest Bid', offer: 600, bidTime: 30 },
    { uri: '', name: "Larry Bird", type: 'Highest Bid', offer: 440, bidTime: 12 },
    { uri: '', name: "Reggie Miller", type: 'Highest Bid', offer: 330, bidTime: 20 },
    { uri: '', name: "Steph Curry", type: 'Highest Bid', offer: 50, bidTime: 2 },]

  const mostPopularMBA = [
    { uri: '', name: "Alex Rodriguez", type: 'Lowest Ask', offer: 100, bidTime: 5 },
    { uri: '', name: "Michael Trout", type: 'Lowest Ask', offer: 600, bidTime: 30 },
    { uri: '', name: "Yadier Molina", type: 'Lowest Ask', offer: 440, bidTime: 12 },
    { uri: '', name: "Miguel Cabrera", type: 'Lowest Ask', offer: 330, bidTime: 20 },
    { uri: '', name: "Clayton Kerhsaw", type: 'Lowest Ask', offer: 50, bidTime: 2 },]

  const highestMBA = [
    { uri: '', name: "Alex Rodriguez", type: 'Highest Bid', offer: 100, bidTime: 5 },
    { uri: '', name: "Michael Trout", type: 'Highest Bid', offer: 600, bidTime: 30 },
    { uri: '', name: "Yadier Molina", type: 'Highest Bid', offer: 440, bidTime: 12 },
    { uri: '', name: "Miguel Cabrera", type: 'Highest Bid', offer: 330, bidTime: 20 },
    { uri: '', name: "Clayton Kerhsaw", type: 'Highest Bid', offer: 50, bidTime: 2 },]

  const mostPopularNFL = [
    { uri: '', name: "Aaron Rodgers", type: 'Lowest Ask', offer: 100, bidTime: 5 },
    { uri: '', name: "Michael Thomas", type: 'Lowest Ask', offer: 600, bidTime: 30 },
    { uri: '', name: "Drew Brees", type: 'Lowest Ask', offer: 440, bidTime: 12 },
    { uri: '', name: "Payton Manning", type: 'Lowest Ask', offer: 330, bidTime: 20 },
    { uri: '', name: "Randy Moss", type: 'Lowest Ask', offer: 50, bidTime: 2 },]

  const highestNFL = [
    { uri: '', name: "Aaron Rodgers", type: 'Highest Bid', offer: 100, bidTime: 5 },
    { uri: '', name: "Michael Thomas", type: 'Highest Bid', offer: 600, bidTime: 30 },
    { uri: '', name: "Drew Brees", type: 'Highest Bid', offer: 440, bidTime: 12 },
    { uri: '', name: "Payton Manning", type: 'Highest Bid', offer: 330, bidTime: 20 },
    { uri: '', name: "Randy Moss", type: 'Highest Bid', offer: 50, bidTime: 2 },]

  const mostPopularPokemon = [
    { uri: '', name: "Pikachu", type: 'Lowest Ask', offer: 100, bidTime: 5 },
    { uri: '', name: "Mew", type: 'Lowest Ask', offer: 600, bidTime: 30 },
    { uri: '', name: "Charizard", type: 'Lowest Ask', offer: 440, bidTime: 12 },
    { uri: '', name: "Articuno", type: 'Lowest Ask', offer: 330, bidTime: 20 },
    { uri: '', name: "Alakazam", type: 'Lowest Ask', offer: 50, bidTime: 2 },]

  const highestPokemon = [
    { uri: '', name: "Pikachu", type: 'Highest Bid', offer: 100, bidTime: 5 },
    { uri: '', name: "Mew", type: 'Highest Bid', offer: 600, bidTime: 30 },
    { uri: '', name: "Charizard", type: 'Highest Bid', offer: 440, bidTime: 12 },
    { uri: '', name: " Articuno", type: 'Highest Bid', offer: 330, bidTime: 20 },
    { uri: '', name: "Alakazam", type: 'Highest Bid', offer: 50, bidTime: 2 },]

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
        <View style={{ flex: 1, marginBottom: 10 }}>
          <VintageOptions type={"Popular Vintage"} />
          <View style={[styles.options]}>
            <ScrollView horizontal={true}>
              {selected == '1' ? (mostPopularMBA.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
                return (
                  <VintagePreview
                    uri={uri}
                    name={name}
                    typeOffer={type}
                    offer={offer}
                    bidTime={bidTime} />
                )
              })) : selected == '2' ? (mostPopularNBA.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
                return (
                  <VintagePreview
                    uri={uri}
                    name={name}
                    typeOffer={type}
                    offer={offer}
                    bidTime={bidTime} />
                )
              })) : selected == '3' ? (mostPopularNFL.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
                return (
                  <VintagePreview
                    uri={uri}
                    name={name}
                    typeOffer={type}
                    offer={offer}
                    bidTime={bidTime} />
                )
              })) : selected == '4' ? (mostPopularPokemon.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
                return (
                  <VintagePreview
                    uri={uri}
                    name={name}
                    typeOffer={type}
                    offer={offer}
                    bidTime={bidTime} />
                )
              })) : null}
            </ScrollView>
          </View>

          <VintageOptions type={"New Vintage"} />
          <ScrollView horizontal={true}>
            {selected == '1' ? (mostPopularMBA.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
              return (
                <VintagePreview
                  uri={uri}
                  name={name}
                  typeOffer={type}
                  offer={offer}
                  bidTime={bidTime} />
              )
            })) : selected == '2' ? (mostPopularNBA.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
              return (
                <VintagePreview
                  uri={uri}
                  name={name}
                  typeOffer={type}
                  offer={offer}
                  bidTime={bidTime} />
              )
            })) : selected == '3' ? (mostPopularNFL.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
              return (
                <VintagePreview
                  uri={uri}
                  name={name}
                  typeOffer={type}
                  offer={offer}
                  bidTime={bidTime} />
              )
            })) : selected == '4' ? (mostPopularPokemon.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
              return (
                <VintagePreview
                  uri={uri}
                  name={name}
                  typeOffer={type}
                  offer={offer}
                  bidTime={bidTime} />
              )
            })) : null}
          </ScrollView>
          <VintageOptions type={"Highest Bid"} />
          <View style={styles.options}>
            <ScrollView horizontal={true}>
              {selected == '1' ? (highestMBA.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
                return (
                  <VintagePreview
                    uri={uri}
                    name={name}
                    typeOffer={type}
                    offer={offer}
                    bidTime={bidTime} />
                )
              })) : selected == '2' ? (highestNBA.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
                return (
                  <VintagePreview
                    uri={uri}
                    name={name}
                    typeOffer={type}
                    offer={offer}
                    bidTime={bidTime} />
                )
              })) : selected == '3' ? (highestNFL.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
                return (
                  <VintagePreview
                    uri={uri}
                    name={name}
                    typeOffer={type}
                    offer={offer}
                    bidTime={bidTime} />
                )
              })) : selected == '4' ? (highestPokemon.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
                return (
                  <VintagePreview
                    uri={uri}
                    name={name}
                    typeOffer={type}
                    offer={offer}
                    bidTime={bidTime} />
                )
              })) : null}
            </ScrollView>
          </View>

          <VintageOptions type={"Lowest Ask"} />
          <View style={styles.options}>
            <ScrollView horizontal={true}>
              {selected == '1' ? (mostPopularMBA.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
                return (
                  <VintagePreview
                    uri={uri}
                    name={name}
                    typeOffer={type}
                    offer={offer}
                    bidTime={bidTime} />
                )
              })) : selected == '2' ? (mostPopularNBA.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
                return (
                  <VintagePreview
                    uri={uri}
                    name={name}
                    typeOffer={type}
                    offer={offer}
                    bidTime={bidTime} />
                )
              })) : selected == '3' ? (mostPopularNFL.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
                return (
                  <VintagePreview
                    uri={uri}
                    name={name}
                    typeOffer={type}
                    offer={offer}
                    bidTime={bidTime} />
                )
              })) : selected == '4' ? (mostPopularPokemon.slice(0, 5).map(({ uri, name, type, offer, bidTime }) => {
                return (
                  <VintagePreview
                    uri={uri}
                    name={name}
                    typeOffer={type}
                    offer={offer}
                    bidTime={bidTime} />
                )
              })) : null}
            </ScrollView>
          </View>
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

const VintagePreview = (props: { uri: any, name: string, typeOffer: string, offer: any, bidTime: any }) => (
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
      <Text style={{ marginTop: 5, marginBottom: 8, color: 'black', fontSize: 12, fontWeight: '500', overflow: 'hidden', }}>{props.name}</Text>
      <Text style={{ marginBottom: 5, color: 'black', fontSize: 12 }}>{props.typeOffer}</Text>
      <Text style={{ marginBottom: 5, color: 'black', fontSize: 24, fontWeight: 'bold' }}>{'$'}{props.offer}</Text>
      <Text style={{ marginBottom: 5, color: 'black', fontSize: 12 }}>{props.bidTime} minutes ago</Text>

    </View>
  </View>
);

export default Home;
